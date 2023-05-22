
const { isEmail } = require('validator');
const { Schema, models, model, SchemaTypes } = require("mongoose");
const contactSchema = new Schema({
    ProjectId: {
        type: SchemaTypes.ObjectId,
        required: true,
        ref: "Project",
    },
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        validate: [isEmail, 'Please provide a valid email']
    },
    Phone: {
        type: String,
        required: true,
    },
    Message: {
        type: String,
        required: true
    },
}, { timestamps: true });
const replayModel = models.Replay || model("Replay", contactSchema);
export default replayModel;
