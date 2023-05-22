import membershipSchema from "@/models/membershipModel";
import { dbConnect } from "@/library/dbConnect";
import router from "@/library/apiRouter";
router.post(async (req, res) => {
    try {
        await dbConnect();
        await membershipSchema.create(req.body);
        res.json({ status: "Petition Submitted Successful" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 'Something went wrong' });
    }
});
router.get(async (req, res) => {
    try {
        await dbConnect();
        const data = await membershipSchema.find().lean();
        res.json({ list: data });
    } catch (error) {
        res.status(500).json({ status: 'Something went wrong' });
    }
})
export default router;