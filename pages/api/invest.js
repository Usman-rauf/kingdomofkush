import { dbConnect } from "@/library/dbConnect";
import investModel from "@/models/investModel";
import router from '@/library/apiRouter';
router.post(async (req, res) => {
    try {
        await dbConnect();
        await investModel.create(req.body);
        res.json({ status: "Invest Submitted Successful" });
    } catch (error) {
        res.status(500).json({ status: "Something went wrong" });
    }
});
router.get(async (req, res) => {
    await dbConnect();
    const data = await investModel.find().lean();
    res.json({ list: data });
})
export default router;
