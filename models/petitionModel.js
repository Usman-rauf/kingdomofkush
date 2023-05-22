import { useRegisterId } from '@/assets/plugins/helpers';

const { isEmail } = require('validator');
const { Schema, models, model } = require("mongoose");
const petitionSchema = new Schema(
    {
        RegistrationId: {
            type: String,
            index: { unique: true },
            default: useRegisterId('KP')
        },
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
        StreetAddress: {
            type: String
        },
        Comment: {
            type: String
        },
        Signature: {
            type: String
        },
        Signaturetext: {
            type: String
        },
        DeviceOperatingSystem: {
            type: String
        },
        DeviceBrowserVersion: {
            type: String
        },
        DeviceLocation: {
            type: String
        },
        DeviceBrowser: {
            type: String
        },
        DeviceIp: {
            type: String
        },

    },
    { timestamps: true }
)
const petitionModel = models.Petition || model("Petition", petitionSchema);
export default petitionModel;

