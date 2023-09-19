import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import {FaEdit, FaEye, FaTrashAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const StudentsView = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
      return () => {
        loadStudents();
      };
    }, []);

    const loadStudents = async() =>{
        const result = await axios.get("http://localhost:8080/students",{
            validateStatus: ()=>{
                return true;
            }
        })
        if(result.status ===302)
        setStudents(result.data)
    }

    const handleDelete = async(id) =>{
        await axios.delete(`http://localhost:8080/students/delete/${id}`);
       loadStudents();
     }

  return (
    <section>
        <table className='table table-bordered table-hover shadow'>
            <thead >
                <tr className='text-center' >   
                   <th>Id</th>
                   <th>First Name</th>
                   <th>Last Name</th>
                   <th>Email</th>
                   <th>Address</th>
                   <th colSpan={3}>Actions</th>
                </tr>
            </thead>

            <tbody className='text-center'>
                {students.map((student,index)=>
                 <tr key={student.id}>
                 <th scope='row' key={index}>
                    {index+1}
                 </th>
                 <td>{student.firstName}</td>
                 <td>{student.lastName}</td>
                 <td>{student.email}</td>
                 <td>{student.address}</td>
                 <td className='mx-2'>
                 <Link to={`/students-profile/${student.id}`} className='btn btn-info'>
                        <FaEye/>
                    </Link>
                 </td>
                 <td className='mx-2'>
                 <Link to={`/edit-students/${student.id}`} className='btn btn-warning'>
                        <FaEdit/>
                    </Link>
                 </td>
                 <td className='mx-2'>
                 <button onClick={()=>handleDelete(student.id)} className='btn btn-danger'>
                        <FaTrashAlt />
                    </button>
                 </td>
                 </tr>
                )} 
            </tbody>
        </table>
    </section>
  )
}

export default StudentsView