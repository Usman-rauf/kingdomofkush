import nextConnect from "next-connect";
const router = nextConnect({
    onError(error, req, res) {
        res.status(500).json({ error: "Internal server error" });
    },
    onNoMatch(req, res) {
        res.status(405).json({ error: `Method '${req.method}' not allowed` });
    },
});
export default router;