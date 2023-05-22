
const { isEmail } = require('validator');
const { Schema, models, model } = require("mongoose");
const contactSchema = new Schema({
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
const contactModel = models.Contact || model("Contact", contactSchema);
export default contactModel;
