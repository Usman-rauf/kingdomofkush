import { useRegisterId } from "@/assets/plugins/helpers";

const { Schema, models, model } = require("mongoose");
const vendorSchema = new Schema(
    {
        RegistrationId: {
            type: String,
            index: { unique: true },
            default: useRegisterId('KV'),
        },
        FirstName: {
            type: String
        },
        LastName: {
            type: String
        },
        Email: {
            type: String
        },
        Birthday: {
            type: String
        },
        Phone: {
            type: String
        },
        AddressLine1: {
            type: String
        },
        AddressLine2: {
            type: String
        },
        City: {
            type: String
        },
        State: {
            type: String
        },
        PostalCode: {
            type: String
        },
        Country: {
            type: String
        },
        Skills: {
            type: String
        },
        InterestAreas: {
            type: String
        },
        CardInfo: {
            type: String
        },
        BillingFirstName: {
            type: String
        },
        BillingLastName: {
            type: String
        },
        BillingAdressline1: {
            type: String
        },
        BillingAdressline2: {
            type: String
        },
        BillingCity: {
            type: String
        },
        BillingState: {
            type: String
        },
        BillingPostalCode: {
            type: String
        },
        BillingCountry: {
            type: String
        },
        Active: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true }
);
const vendorModel = models.Vendor || model("Vendor", vendorSchema);
export default vendorModel;
