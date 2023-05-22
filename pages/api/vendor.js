import { dbConnect } from "@/library/dbConnect";
import vendorModel from "@/models/vendorModel";
import router from "@/library/apiRouter";
router.post(async (req, res) => {
    try {
        await dbConnect();
        await vendorModel.create(req.body);
        res.json({ status: "Vendor Submitted Successful" });
    } catch (error) {
        res.status(500).json({ status: 'Something went wrong' });
    }
});
router.get(async (req, res) => {
    try {
        await dbConnect();
        const data = await vendorModel.find().lean();
        res.json({ list: data });
    } catch (error) {
        res.status(500).json({ status: 'Something went wrong' });
    }
});
export default router;