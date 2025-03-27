const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    userid:{
        type:String,
        required:true,
    },
    amount: {
        type: Number,
        required: [true, "Amount is require"],
    },
    type: {
        type: String,
        required: [true, "Type is require"],
    },
    category: {
        type: String,
        required: [true, "Category is required"],
    },
    reference: {
        type: String
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    date: {
        type: Date,
        required: [true, "Date is required"],
    }

}, { timestamps: true });

const transactionModel = mongoose.model("transaction", transactionSchema);

module.exports = transactionModel;