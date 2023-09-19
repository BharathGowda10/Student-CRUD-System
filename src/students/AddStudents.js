import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const AddStudents = () => {
  
    let navigate =useNavigate();
    const [student, setstudent] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
    });
    
    const{firstName,lastName,email,address}=student;
         const handleInputChange =(e)=>{
            setstudent({...student,[e.target.name]: e.target.value,
            })
         }

         const saveStudents = async(e)=>{
            e.preventDefault();
               await axios.post("http://localhost:8080/students",student);
                       navigate('/view-students');
         }

        
     

  return (
    <div className='col-sm-8 py-2 px-5 offset-2 shadow'>
        <form onSubmit={(e)=>saveStudents(e)}>
            <div className='input-group mb-5'>
                <label className='input-group-text'
                htmlFor='firstName'>
                 First Name
                </label>
                <input 
                className='form-control col-sm-6'
                type='text'
                name='firstName'
                id='firstName'
                value={firstName}
                onChange={(e)=>handleInputChange(e)}
                >
                </input>
            </div>

            <div className='input-group mb-5'>
                <label className='input-group-text'
                htmlFor='lastName'>
                 Last Name
                </label>
                <input 
                className='form-control col-sm-6'
                type='text'
                name='lastName'
                id='lastName'
                value={lastName}
                onChange={(e)=>handleInputChange(e)}
                >
                </input>
            </div>

            
            <div className='input-group mb-5'>
                <label className='input-group-text'
                htmlFor='email'>
                 Email
                </label>
                <input 
                className='form-control col-sm-6'
                type='text'
                name='email'
                id='email'
                value={email}
                onChange={(e)=>handleInputChange(e)}
                >
                </input>
            </div>

            
            <div className='input-group mb-5'>
                <label className='input-group-text'
                htmlFor='address'>
                 Address
                </label>
                <input 
                className='form-control col-sm-6'
                type='text'
                name='address'
                id='address'
                value={address}
                onChange={(e)=>handleInputChange(e)}
                >
                </input>
            </div>
               <div className='col-sm-2 mb-2'>
               <button className='btn btn-success '>Save</button>
               </div>
           
               <div className='col-sm-2 '>
               <Link to={"/view-students"} className='btn btn-danger'>Cancel</Link>
               </div>
            
        </form>

    </div>
  )
}

export default AddStudents