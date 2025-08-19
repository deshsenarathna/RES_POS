//const  Razorpay = require("razorpay");

const createOrder = async (req, res, next) => {


    const {amount} = req.body;

    const options = {
        amount: amount * 100, // Amount in paise
        currency: "LKR",
        receipt: `receipt_${Date.now()}`,
        
    };


}

const verifyPayment = async (req, res, next) => {

    try {
        
        
    } catch (error) {
        
    }

}

module.exports = {createOrder, verifyPayment};