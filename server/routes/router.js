const express = require("express");
const router = new express.Router();
const Products = require("../models/productSchema");
const USER = require("../models/userSchema");

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

        const storedata = await finalUser.save();
         console.log(storedata + "user successfully added");
        res.status(201).json(storedata);
   }
 } catch(error){
      
   }

 });

module.exports = router;