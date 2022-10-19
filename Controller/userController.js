
const UserModel = require('../model/userSchema');
const bcrypt = require('bcryptjs');

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
   host: 'smtp',
   port: 802,
   secure: false,
   requireTLS: true,
   service: 'gmail',
   auth: {
      user: 'biswassanto0011@gmail.com',
      pass: 'ylgefojmqbfxszkm'
   }
});

exports.registerCont = (req, res) => {
   const { uName, phone, country, address, email, password } = req.body;

   UserModel.findOne({ email: email }).then((userData) => {
      if (userData) {
         return res.status(401).json({ message: "Email alredy exist" })
      } else {
         bcrypt.hash(password, 10).then((hashPassword) => {
            const user_data = new UserModel({
               uName: uName,
               phone: phone,
               country: country,
               address: address,
               email: email,
               password: hashPassword
            });
            user_data.save().then(() => {
               let mailOptions = {
                  from: 'biswassanto0011@gmail.com',
                  to: email,
                  subject: 'Sending Email using Node.js to confirm registration',
                  text: 'You have successfully registered'
               };
               transporter.sendMail(mailOptions, (error, info) => {
                  if (error) {
                     console.log("Error to send mail", error);
                  } else {
                     console.log("Email sent" + info.response);
                  }
               });
               return res.status(201).json({
                  message: 'Registartion successgully'
               });
            }).catch((err) => {
               return res.status(401).json(err.message)
            })
         })
      }
   }).catch((err) => {
      res.status(401).json(err.message)
   })
}

// loginController
exports.loginCont = async (req, res) => {
   const { email, password } = req.body;
   try {
      const userLogin = await UserModel.findOne({ email: email });
      if (!userLogin) {
         res.status(406).json({
            success: false,
            message: "Invalid Email"
         });
      } else {
         const isMatch = await bcrypt.compare(password, userLogin.password);
         if (!isMatch) {
            res.status(400).json({
               success: false,
               message: "Wrong password"
            })
         } else {
            const token = await userLogin.generatAuthtoken();
            res.status(201).json({ token: token, userLogin });
         }
      }
   } catch (error) {
      return res.status(400).json(error)
   }
}


// googleLoginCont
exports.googleLoginCont = async (req, res) => {
   const { email } = req.params;

   try {
      const userLogin = await UserModel.findOne({ email: email });
      if (!userLogin) {
         res.status(406).json({
            success: false,
            message: "Invalid Email"
         });
      } else {
         const token = await userLogin.generatAuthtoken();
         res.status(201).json({ token: token, userLogin });
      }
   } catch (error) {
      return res.status(400).json(error)
   }
}
