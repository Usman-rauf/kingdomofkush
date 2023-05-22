const { isEmail } = require('validator');
const { Schema, models, model } = require("mongoose");
const investSchema = new Schema(
    {
        FirstName: {
            type: String,
            required: true
        },
        LastName: {
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
        ProjectCategories: [
            {
                type: String,
                required: true
            }
        ],
        InvestorType: {
            type: String,
            required: true
        },
        InvestmentAmount: {
            type: String,
            required: true
        },
        InvestmentLocation: {
            type: String,
            required: true
        },
        InvestmentStartTime: {
            type: String,
            required: true
        },
    },
    { timestamps: true }
)
const investModel = models.Invest || model("Invest", investSchema);
export default investModel;
