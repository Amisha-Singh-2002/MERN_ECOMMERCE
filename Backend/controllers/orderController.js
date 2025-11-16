import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

// global variables
const currency = 'inr';
const deliveryCharge = 10; // in cents
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);



//Placing order using COD Method

const placeOrder= async(req,res)=>{

    try{
        const {userId, items, amount, address } = req.body;

        const orderData ={
            userId,
            items,
            amount,
            address,
            paymentMethod:'cod',
            payment:false,
            date:Date.now()
        }
        console.log('Order Data:', orderData);
        const newOrder = new orderModel(orderData);
        console.log('New Order:', newOrder);
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId, {cartData:{}});

        res.json({ success: true, message: 'Order placed successfully'});

    }
    catch(error){
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}
// //placing orders using Stripe Method
// const placeOrderStripe= async(req,res)=>{
//     try{
//         const {userId, items, amount, address} = req.body;
//         const { origin } = req.headers;

//          const orderData ={
//             userId,
//             items,
//             amount,
//             address,
//             paymentMethod:'Stripe',
//             payment:false,
//             date:Date.now()
//         }
//          const newOrder = new orderModel(orderData);
//         await newOrder.save();

//         const line_items= items.map((item)=>({
//             price_data: {
//                 currency:currency,
//                 product_data: { 
//                     name: item.name,
//                 },
//                 unit_amount: item.price * 100,
//             },
//             quantity: item.quantity || 1,
//         }))
//              line_items.push({
//                         price_data: {
//                         currency:currency,
//                         product_data: { 
//                             name: 'Delivery Charges'
//                         },
//                         unit_amount: deliveryCharge * 100,
//                     },
//                     quantity: 1
//             })

//         const session = await stripe.checkout.sessions.create({
//                 success_url:`${origin}/verify?success=true&orderId=${newOrder._id}`,
//                 cancel_url:`${origin}/verify?success=false&orderId=${newOrder._id}`,
//                 line_items,
//                 mode:'payment',
//         })
//         return res.json({ success: true, session_url:session.url });
//     }
//     catch(error){
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// }

//placing orders using Razorpay Method
const placeOrderRazorpay= async(req,res)=>{

}

//All Orders data for Admin Panel

const allOrders= async(req,res)=>{

    try{
        const orders = await orderModel.find({});
       return res.json({ success: true, orders });

    }
    catch(error){
        console.log(error);
       return  res.json({ success: false, message: error.message });
    }
}

//User Order Data For Forntend
const userOrders= async(req,res)=>{
    try{

        const {userId} = req.body;

        const orders = await orderModel.find({userId});
        return res.json({ success: true, orders });

    }
    catch(error){
        console.log(error);
        return res.json({ success: false, message: error.message });
    }
}

//Update Order Status 
const updateStatus = async(req,res)=>{
    try{
        const {orderId, status} = req.body;
        await orderModel.findByIdAndUpdate(orderId, {status});
        return res.json({ success: true, message: 'Order status updated successfully'});
    }
    catch(error){
        console.log(error);
        return res.json({ success: false, message: error.message });
    }
}

export {placeOrder, allOrders, userOrders, updateStatus};