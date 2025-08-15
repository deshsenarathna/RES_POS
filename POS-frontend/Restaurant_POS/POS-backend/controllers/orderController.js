const Order = require('../models/orderModel');
const createHttpError = require('http-errors');
const mongoose = require('mongoose');

const addOrder = async (req, res,next) => {
    try{
        const order = new Order(req.body);
        await order.save();
        res.status(201).json({success:true, message: 'Order created successfully', data:order });

    }catch(err){
        next(err);
    }

}


const getOrders = async (req, res) => {
    try{
         const orders = await Order.find().populate("table");
         res.status(200).json({data: orders});
    }catch(err){
        next(err);
    }
}

const getOrderById = async (req, res) => {
   try{
      const order = await Order.findById(req.params.id);
      if(!order){
         const err = createHttpError(404, 'Order not found');
         return next(err);
      }
        res.status(200).json({success:true, data: order });
   }catch(err){
         next(err);
   }
}

const updateOrder = async (req, res) => {
   try{
       const {orderStatus} = req.body;
       const order = await Order.findByIdAndUpdate(req.params.id, {orderStatus}, {new: true});
         if(!order){
            const err = createHttpError(404, 'Order not found');
            return next(err);
         }

         res.status(200).json({success:true, message: 'Order updated successfully', data:order });
   }catch(err){
     
   }
}

module.exports = {
    addOrder,
    getOrders,
    getOrderById,
    updateOrder
};

