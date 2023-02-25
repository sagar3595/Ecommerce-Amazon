const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
    const { items, email} = req.body;

   const transformedItems = items.map((item) => ({
   
    quantity:1,
    price_data: {
        currency:'inr',
        unit_amount:item.price * 100,
        product_data:{
            name:item.title,
            images: [item.image],
            description:item.description,
        },
    },

   }));
 
   const session = await stripe.checkout.sessions.create({
    
    shipping_options:[{shipping_rate:'shr_1MeZ8PSDdes7jws1BU6BA2Bt'}],
    shipping_address_collection:{
        allowed_countries: ["IN", "US", "CA"],
    },
    line_items:transformedItems,
    mode: 'payment',
    success_url: `${process.env.HOST}/success`,
    cancel_url:`${process.env.HOST}/checkout`,
    metadata:{
        email,
        images: JSON.stringify(items.map(item => item.image))
    }
   })
 res.status(200).json({ id: session.id })
};