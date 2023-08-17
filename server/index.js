const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cors());



const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "charity",
});
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/login", (req, res)=>{
    const sqlSelect = "SELECT* from user where email=? AND password_=?;"
    // const values = [
    //     req.body.email,req.body.password
    // ]
    db.query(sqlSelect, [req.body.email,req.body.password],(err,data)=>{
        if(err)
            return res.json("Error");
        if(data.length > 0){
           
            return res.json("Login Successfully")
        }
        else{
            return res.json("No record");
        }
        
    });
});
app.post("/api/insert", (req, res) => {
    const name = req.body.name;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    const mobile = req.body.mobile;

    const sqlInsert = "INSERT INTO user (Name_, uname, email, password_, cpassword, mobno) VALUES (?, ?, ?, ?, ?, ?);"
    

    db.query(sqlInsert, [name,username,email,password,confirmPassword,mobile], (err, result) => {
        if (err) {
            console.error('Error inserting user data:', err);
            return res.status(500).send('Error during insertion');
        }
        console.log('User data inserted successfully');
        res.send('Data inserted successfully');
    });
});


app.post('/donate',(req,res) => {
    const name = req.body.name;
    const mobilenumber = req.body.mobileNumber;
    const selectedProduct = req.body.selectedProduct;  
    const quantity = req.body.quantity;
    const amount = req.body.amount;

    const sql = "INSERT INTO donate (name_,mobno,selected_product,quantity,amount) VALUES(?,?,?,?,?);"
    db.query(sql, [name, mobilenumber,selectedProduct,quantity,amount],(err,data)=>{
        if(err){
            console.log("Error");
            // return res.status(500).send("Error During Insertion of Donation");
        }
        console.log("Donated Successfully");
        res.send("Donated")
    });
});
// app.get('/', (req, res) => {
//     res.sendFile(path.resolve("src/components/Navbar.js"));
// });                                                              //While reloading redirected to Cannot/GET page

app.listen(3000, () => {
    console.log("Running on port ");
});
