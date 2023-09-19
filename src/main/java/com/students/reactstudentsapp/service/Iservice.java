package com.students.reactstudentsapp.service;

import com.students.reactstudentsapp.model.students;

import java.util.List;

public interface Iservice {

     List<students> getAllStudents();

     students addStudent(students Students);

     students getStudentById(Long id);

     students updateStudentsById(students Students,Long id);

     void deleteStudentsById(Long id);


}
