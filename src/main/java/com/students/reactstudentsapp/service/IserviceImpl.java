package com.students.reactstudentsapp.service;

import com.students.reactstudentsapp.exception.studentNotFoundException;
import com.students.reactstudentsapp.exception.studentsAlreadyExistsException;
import com.students.reactstudentsapp.model.students;
import com.students.reactstudentsapp.repository.studentsRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IserviceImpl implements Iservice{

    private final studentsRepo studentsRepo;

    public IserviceImpl(com.students.reactstudentsapp.repository.studentsRepo studentsRepo) {
        this.studentsRepo = studentsRepo;
    }

    @Override
    public List<students> getAllStudents() {
        return studentsRepo.findAll();
    }

    @Override
    public students addStudent(students Students) {
        if (studentsAlreadyExists(Students.getEmail())){
            throw  new studentsAlreadyExistsException(Students.getEmail() +" "+ "this id already exists");
        }
        return studentsRepo.save(Students);
    }

    private boolean studentsAlreadyExists(String email) {
       return studentsRepo.findByEmail(email).isPresent();
    }

    @Override
    public students getStudentById(Long id) {
        return studentsRepo.findById(id)
                .orElseThrow(()-> new
                        studentNotFoundException(id + " "+ "this id does not exists"));
    }



    @Override
    public students updateStudentsById(students Students, Long id) {
        return studentsRepo.findById(id).map(st->{
            st.setFirstName(Students.getFirstName());
            st.setLastName(Students.getLastName());
            st.setEmail(Students.getEmail());
            st.setAddress(Students.getAddress());
            return studentsRepo.save(st);
        }).orElseThrow(()-> new studentNotFoundException(id + " "+ "this id does not exists"));
    }

    @Override
    public void deleteStudentsById(Long id) {
       if (!studentsRepo.existsById(id)){
           throw  new studentNotFoundException(id + " "+ "this id does not exists");
       }
        studentsRepo.deleteById(id);
    }
}
