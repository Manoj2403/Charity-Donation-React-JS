import React , {useState,useEffect} from 'react';
// import React , {useState,useEffect} from 'react';

import { useNavigate,Link } from "react-router-dom";
import axios from 'axios';


function Rightpanel(){

    const [userData, setUserdata]= useState([]); 
    useEffect( ()=>{
        const getUserdata= async()=>{
            try{
                const reqData= await fetch("http://127.0.0.1:5500/API/test.json");
                const resData= await reqData.json();
                setUserdata(resData.countries); 
                // console.log(resData.countries[0].name);
                
            }
            catch (error) {
                console.error('Error fetching user data:', error);
            }
        }
        getUserdata();
    },[]);
    return(
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h5 className='mt-2'>User Data</h5>
                        <table className="table table-bordered">
                        <thead>
                            <tr>
                            <th>S.No</th>
                            <th >Name</th>
                            <th >Mobile Number</th>
                            <th >Product</th>
                            <th >Quantity</th>
                            <th >Amount</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {userData.map((userData,index)=>(
                            <tr key={index}>
                            <td>{index+1}</td>
                            <th>{userData.name}</th>
                            <td>{userData.mobno}</td>
                            <td >{userData.prod}</td>
                            <td>{userData.quantity}</td>
                            <td>{userData.amount}</td>
                            <td>{ userData.status===1?"Active":"Inactive" } </td>
                            <td>
                                <Link to="#" className='btn btn-success mx-2'>Edit User</Link>
                                <Link to="#" className='btn btn-danger'>Delete</Link>
                            </td>
                            
                            </tr>
                        ))}
                            
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    );
}

export default Rightpanel;