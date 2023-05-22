import petitionModel from "@/models/petitionModel";
import { dbConnect } from "@/library/dbConnect";
import router from "@/library/apiRouter";
router.post(async (req, res) => {
    try {
        await dbConnect();
        await petitionModel.create(req.body);
        res.json({ status: "Petition Submitted Successful" });
    } catch (error) {
        res.status(500).json({ status: "Something went wrong" });
    }
});
router.get(async (req, res) => {
    try {
        await dbConnect();
        const data = await petitionModel.find().lean();
        res.json({ list: data });
    } catch (error) {
        res.status(500).json({ status: "Something went wrong" });
    }
});
export default router;
