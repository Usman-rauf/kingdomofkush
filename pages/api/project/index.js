import { useSlug } from "@/assets/plugins/helpers";
import projectModel from "@/models/projectModel";
import { dbConnect } from "@/library/dbConnect";
import router from "@/library/apiRouter";
import multer from "multer";
import path from "path";
const upload = multer({
    storage: multer.diskStorage({
        destination: path.join(process.cwd(), "/public/uploads"),
        filename: (req, file, cb) => {
            cb(null, `thumbnail-${Date.now()}.png`);
        }
    })
});
router.use(upload.single("thumbnail"));
router.post(async (req, res) => {
    try {
        await dbConnect();
        const {
            title,
            country,
            videoUrl,
            category,
            thumbnail,
            uploadMode,
            kushInvolvement,
            projectDescription
        } = req.body;
        await projectModel.create({
            title: title,
            country: country,
            videoUrl: videoUrl,
            category: category,
            slug: useSlug(title),
            kushInvolvement: kushInvolvement,
            projectDescription: projectDescription,
            thumbnail: uploadMode == 'true' ? `/uploads/${req.file.filename}` : thumbnail,
        });
        res.json({ status: "Petition Submitted Successful" });
    } catch (error) {
        res.status(500).json({ status: 'Something went wrong' });
    }
});
router.get(async (req, res) => {
    await dbConnect();
    const data = await projectModel.find().find().lean();
    res.json({ list: data });
});
router.delete(async (req, res) => {
    try {
        await dbConnect();
        const projectId = req.query["id"].toString();
        await projectModel.findByIdAndDelete(projectId);
        res.json({ status: 'Project Deleted Successfull' });
    } catch (error) {
        res.status(500).json({ status: 'Project Deleted Failed' });
    }
});
export default router;
export const config = {
    api: {
        bodyParser: false,
    },
};