import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

const StudentProfile = () => {
    
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
    



  

  return (
    <section
        style={{backgroundColor: "whitesmoke"}}>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-lg-3'>
                      <div className='card-mb-4'>
                        <div className='card-body text-center'>
                             <h5 className='my-3'> 
                            {`${student.firstName} ${student.lastName}`}
                             </h5>

                             <div className='d-flex justify-content-center mb-2'>
                                  <button type='button'
                                  className='btn btn-primary'>
                                     call
                                  </button>

                                  <button type='button' className='btn btn-outline-warning ms-1'>
                                    Message
                                  </button>

                             </div>
                        </div>

                      </div>
                    </div>

                    <div className='col-lg-9'>
                        <div className='card mb-4'>
                          <div className='card-body'>
                             
                             <div className='row'>
                             <div className='col-sm-3'>
                             <h5 className='mb-0'>
                              First Name
                             </h5>
                             </div>
                             <div className='col-sm-9'>
                                <span className='text-muted mb-0'>
                                {student.firstName}
                                </span>
                             </div>
                             </div>
                            
                           
                             <div className='row'>
                             <div className='col-sm-3'>
                             <h5 className='mb-0'>
                              Last Name
                             </h5>
                             </div>
                             <div className='col-sm-9'>
                                <span className='text-muted mb-0'>
                                {student.lastName}
                                </span>
                             </div>
                             </div>
                            
                            
                             <div className='row'>
                             <div className='col-sm-3'>
                             <h5 className='mb-0'>
                              Email
                             </h5>
                             </div>
                             <div className='col-sm-9'>
                                <span className='text-muted mb-0'>
                                {student.email}
                                </span>
                             </div>
                             </div>
                            

                            
                             <div className='row'>
                             <div className='col-sm-3'>
                             <h5 className='mb-0'>
                              Address
                             </h5>
                             </div>
                             <div className='col-sm-9'>
                                <span className='text-muted mb-0'>
                                {student.address}
                                </span>
                             </div>
                             </div>
                            

                          </div>
                        </div>

                    </div>

                </div>

            </div>
    </section>
  )
}

export default StudentProfile