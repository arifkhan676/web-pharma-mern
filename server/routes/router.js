const express = require("express");
const router = new express.Router();
const Products = require("../models/productSchema");
const USER = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const authenicate = require("../middleware/authenicate");


// get products through API
router.get("/getproducts", async(req,res)=>{
    try{
        const productsdata = await Products.find();
     //   console.log("here is new data "+ productsdata);
    res.status(201).json(productsdata);
    }
    catch(error){
        console.log("error" + error.message);
    }
});

//get inidividual id

 router.get("/getproductsone/:id",async(req,res)=>{
    try{
        const {id} = req.params;
       // console.log(id);
       const individualdata = await Products.findOne({id:id});
      // console.log(individualdata + "individual data");
       res.status(201).json(individualdata);
    }catch(error){
       res.error(400).json(individualdata);
       console.log("error"+error.message);
    }
 });

 //register data

 router.post("/register",async(req,res)=>{
   // console.log(req.body);

   const {fname,email,mobile,password,cpassword} = req.body;

   if(!fname || !email || !mobile || !password || !cpassword ){
    res.status(422).json({ error: "filll the all details" });
    console.log("not data avilable");
   };

   try{
    const preuser = await USER.findOne({email:email});
    if (preuser) {
        res.status(422).json({ error: "This email is already exist" });
    } else if (password !== cpassword) {
        res.status(422).json({ error: "password are not matching" });
    } else {
        const finalUser = new USER({
            fname, email, mobile, password, cpassword
        });

        //

        const storedata = await finalUser.save();
         console.log(storedata + "user successfully added");
        res.status(201).json(storedata);
   }
 } catch(error){
    console.log("its error");
    res.status(422).send(error);

   }

 });


  //login  data

   router.post("/login",async(req,res)=>{
    const {email,password} = req.body;

    if(!email || !password){
       res.status(400).json({error:"fill the details"});
    }
    try{
        const loginUser = await USER.findOne({email:email});
        console.log(loginUser +"user value ");

        if(loginUser){
            const isMatch = await bcrypt.compare(password,loginUser.password);
            console.log(isMatch + " pass match" );
          
           //JWT token generate
            const token = await loginUser.generateAuthtoken();
            console.log(token);

            res.cookie("webpharma",token,{
             expires:new Date(Date.now()+900000),
             httpOnly:true
            })

            if(!isMatch){
                res.status(400).json({error:"doesn't match password"});
            }else{
                res.status(201).json(loginUser);
            }

        }else{
            res.status(400).json({error:"Invalid details"});

        }
    }
    catch(error){
        res.status(400).json({error:"Invalid address"});
    }
   })

   //adding data into cart

   router.post("/addcart/:id",authenicate,async(req,res)=>{
        try {
            const {id} = req.params;
            const cart = await Products.findOne({id:id});
            console.log(cart +"cart value");
            
            const UserContact = await USER.findOne({_id:req.userID});
            console.log(UserContact);

            if(UserContact){
                const cartData = await UserContact.addcartdata(cart);
                await UserContact.save();
                console.log(cartData);
                res.status(201).json(UserContact);
            }else{
                res.status(401).json({error:"invalid user"});
            }

        } catch (error) {
            res.status(401).json({error:"invalid user"});
        }
   })

module.exports = router;