import { dbConnect } from "@/library/dbConnect";
import replayModel from "@/models/replayModel";
import router from "@/library/apiRouter";
router.post(async (req, res) => {
    try {
        await dbConnect();
        await replayModel.create(req.body);
        res.json({ status: "Contact Form Submitted Successful" });
    } catch (error) {
        res.status(500).json({ status: "Something went wrong" });
    }
});
router.get(async (req, res) => {
    await dbConnect();
    const data = await replayModel.find().lean();
    res.json({ list: data });
});
export default router;
