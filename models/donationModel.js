const { isEmail } = require('validator');
const { Schema, models, model } = require("mongoose");
const donationSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        validate: [isEmail, 'Please provide a valid email']
    },
    Mobile: {
        type: String,
        required: true,
    },
    Amount: {
        type: String,
        required: true
    },
    Frequency: {
        type: String,
        required: true
    },
    CardInfo: {
        type: String
    }
}, { timestamps: true })
const donationModel = models.Donation || model("Donation", donationSchema);
export default donationModel;
