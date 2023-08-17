// const express = require("express");
// const cors = require("cors");
// const app = express();
// const mysql = require("mysql");
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());

// const db = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "charity",
// });

// app.get("/signup", (req, res) => {
//     const sqlInsert = "INSERT INTO user (Name_, uname, email, password_, cpassword, mobno) VALUES (?, ?, ?, ?, ?, ?)";
//     const values = ['MANOJ', 'manoj', 'manojkumar.se21@bitsathy.ac.in', '1234', '1234', '8754253549'];

//     db.query(sqlInsert, values, (err, result) => {
//         if (err) {
//             console.error('Error inserting user data:', err);
//             return res.status(500).send('Error during insertion');
//         }
//         console.log('User data inserted successfully');
//         res.send('Data inserted successfully');
//     });
// });

// app.listen(3000, () => {
//     console.log("Running on port ");
// });




// const express = require("express");
// // const collection =  require("./mongo");
// const cors = require("cors");
// const app =  express(); 
// const mysql = require("mysql");
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors())

// const db = mysql.createPool({
//     host: "localhost",
//     user: " ",
//     password: " ",
//     database: "charity",
// });


// // // app.get("/",cors(),(req,res)=>{

// // // })

// // // app.post("/signup", async(req,res)=>{
// // //     const{email,password}=req.body      //help of req.body fetching the objects from signup.js 

   

// // //     try{
// // //         const check = await collection.findOne({email:email})

// // //         if(check){
// // //             res.json("Exist")
// // //         }
// // //         else{
// // //             res.json("Not exist")
            
// // //         }
// // //     }
// // //     catch(e){
// // //         res.json("Not exist")
// // //     }
// // // })

// // db.connect((err) => {
// //     if (err) {
// //       console.error('Error connecting to MySQL database:', err);
// //     } else {
// //       console.log('Connected to MySQL database');
// //     }
// //   });
// app.get("/", (req,res)=>{
//     // const{name,
//     //     username,
//     //     email,
//     //     password,
//     //     confirmPassword,
//     //     mobile,}=req.body      //help of req.body fetching the objects from login.js 

//         // res.send("Hello")

//         const sqlInsert = "INSERT INTO user (Name_, uname, email, password_, cpassword,mobno) VALUES ('MANOJ', 'manoj','manojkumar.se21@bitsathy.ac.in', '1234','1234','8754253549');"
//        db.query(sqlInsert, (err,res)=>{
//         res.send(err)
//         res.send("Successful")
//        })
//         // db.query(
//         //   sqlInsert,
//         //   [name, username, email, password, confirmPassword,mobile],
//         //   (err, result) => {
//         //     if (err) {
//         //       console.error('Error inserting user data:', err);
//         //       return res.status(500).send('Error during sign-up');
//         //     }
//         //     console.log('User signed up successfully');
//         //     res.send('Not exist'); // You can send other response if needed
//         //   }
//         // );

//     // try{
//     //     const check = await collection.findOne({email:email})

//     //     if(check){
//     //         res.json("Exist")
//     //     }
//     //     else{
//     //         res.json("Not exist")
//     //         await collection.insertMany([data])     //it will exist if the user is new  
//     //     }
//     // }
//     // catch(e){
//     //     res.json("Not exist")
//     // }
// });

// app.listen(3001, ()=>{
//     console.log("Running on port 3001")
// })