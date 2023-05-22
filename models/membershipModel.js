const { isEmail } = require('validator');
const { Schema, models, model } = require("mongoose");
import { useRegisterId } from '@/assets/plugins/helpers';
const membershipSchema = new Schema(
    {
        registrationId: {
            type: String,
            index: { unique: true },
            default: useRegisterId('KM')
        },
        MiddleName: {
            type: String,
        },
        LastName: {
            type: String,
        },
        FirstName: {
            type: String,
        },
        Signature: {
            type: String,
        },
        CardInfo: {
            type: String,
        },
        Phone: {
            type: String,
        },
        Email: {
            type: String,
            required: true,
            index: { unique: true },
            validate: [isEmail, 'Please provide a valid email']
        },
        Title: {
            type: String,
        },
        City: {
            type: String,
        },
        State: {
            type: String,
        },
        Country: {
            type: String,
        },
        Apartment: {
            type: String,
        },
        PostalCode: {
            type: String,
        },
        StreetAddress: {
            type: String,
        },
        MemberhipPlan: {
            type: String,
        },
        BillingName: {
            type: String,
        },
        BillingCity: {
            type: String,
        },
        BillingState: {
            type: String,
        },
        BillingCountry: {
            type: String,
        },
        BillingAddress: {
            type: String,
        },
        BillingApartment: {
            type: String,
        },
        BillingPostalCode: {
            type: String,
        },
        Active: {
            type: Boolean,
            default: true,
        },
        Password: {
            type: String,
            minlength: 5,
        },
    },
    { timestamps: true }
);
const membershipModel = models.Membership || model("Membership", membershipSchema);
export default membershipModel;
