const { isEmail } = require('validator');
const { Schema, models, model } = require("mongoose");
const adminSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        title: {
            type: String,
        },
        mobile: {
            type: String,
            required: true,
            index: { unique: true }
        },
        email: {
            type: String,
            required: true,
            index: { unique: true },
            validate: [isEmail, 'Please provide a valid email']
        },
        avatar: {
            type: String,
            default: "/images/avatar.jpg"
        },
        level: {
            default: 1,
            type: Number,
        },
        active: {
            type: Boolean,
            default: false
        },
        password: {
            type: String,
            required: true
        },
    },
    { timestamps: true }
);
const adminModel = models.Admin || model("Admin", adminSchema);
export default adminModel;
