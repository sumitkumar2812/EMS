const express = require("express");
const { addTransaction, getAllTransactions, editTransaction, deleteTransaction } = require("../controllers/transactionCtrl");


const router = express.Router()

//route
//add Transaction
router.post("/add-transaction", addTransaction);

//edit Transaction
router.post("/edit-transaction", editTransaction);

//delete Transaction
router.post("/delete-transaction", deleteTransaction);

//getTransaction

router.post("/get-transaction", getAllTransactions);

module.exports = router; 