import { useRegisterId } from "@/assets/plugins/helpers";
const { Schema, models, model } = require("mongoose");
const volunteerSchema = new Schema(
    {
        RegistrationId: {
            type: String,
            index: { unique: true },
            default: useRegisterId('KV')
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
        InterestPlace: {
            type: String
        },
        EmergencyEmail: {
            type: String
        },
        EmergencyPhone: {
            type: String
        },
        Active: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true }
);
const volunteerModel = models.Volunteer || model("Volunteer", volunteerSchema);
export default volunteerModel;
