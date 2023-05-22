const { Schema, models, model } = require("mongoose");
const projectSchema = new Schema(
    {
        title: {
            type: String
        },
        slug: {
            type: String,
        },
        country: {
            type: String
        },
        thumbnail: {
            type: String
        },
        category: {
            type: String
        },
        videoUrl: {
            type: String
        },
        kushInvolvement: {
            type: String
        },
        projectDescription: {
            type: String
        },
        active: {
            type: Boolean,
            default: true,
        }
    },
    { timestamps: true }
);
const projectModel = models.Project || model("Project", projectSchema);
export default projectModel;
