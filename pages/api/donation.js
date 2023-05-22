import donationModel from "@/models/donationModel";
import { dbConnect } from "@/library/dbConnect";
import router from "@/library/apiRouter";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
router.post(async (req, res) => {
    try {
        await dbConnect();
        const {
            Frequency,
            PaymentId,
            Amount,
            Phone,
            Email,
            Name,
        } = req.body;
        const paymentIntentData = await stripe.paymentIntents.create({
            payment_method_types: ["card"],
            currency: "USD",
            amount: Amount,
        });
        // const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(paymentIntentData.clientSecret, {
        //     payment_method: {
        //         card: PaymentId,
        //         billing_details: {
        //             name: Name,
        //         },
        //     }
        // });
        // if (confirmError) {
        //     return res.json({ status: "Donation Failed" });
        // }
        const cardInfo = `Amount: $${Amount}  \n ClientSecret: `;
        await donationModel.create({
            Frequency: Frequency,
            CardInfo: cardInfo,
            Amount: Amount,
            Phone: Phone,
            Email: Email,
            Name: Name,
        });
        res.json({ status: "Petition Submitted Successful", cardInfo: cardInfo });
    } catch (error) {
        res.status(500).json({ status: 'Something went wrong' });
    }
});
router.get(async (req, res) => {
    try {
        await dbConnect();
        const data = await donationModel.find().lean();
        res.json({ list: data });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 'Something went wrong' });
    }
});
export default router;