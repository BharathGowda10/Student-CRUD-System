import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';


const EditStudents = () => {
    
   let navigate = useNavigate();
    const [student, setstudent] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
    });

    
    useEffect(() => {
        return () => {
          loadStudent();
        };
      }, []);
  
      const loadStudent = async() =>{
          const result = await axios.get(`http://localhost:8080/students/student/${id}`)
          setstudent(result.data)
      }

        const{ id } = useParams();
    
    const{firstName,lastName,email,address}=student;
         const handleInputChange =(e)=>{
            setstudent({...student,[e.target.name]: e.target.value,
            })
         }

         const editStudents = async(e)=>{
            e.preventDefault();
               await axios.put(`http://localhost:8080/students/update/${id}`,student);
                navigate("/view-students");     
         }

        
     

  return (
    <div className='col-sm-8 py-2 px-5 offset-2 shadow'>
        <h2 className='text-center'>Edit Students</h2>
        <form onSubmit={(e)=>editStudents(e)}>
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

export default EditStudents