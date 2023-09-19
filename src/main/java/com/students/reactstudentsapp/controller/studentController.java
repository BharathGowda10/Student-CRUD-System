package com.students.reactstudentsapp.controller;

import com.students.reactstudentsapp.model.students;
import com.students.reactstudentsapp.service.IserviceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/students")
public class studentController  {


    private final IserviceImpl iservice;

    public studentController(IserviceImpl iservice) {
        this.iservice = iservice;
    }


    @GetMapping
    public ResponseEntity<List<students>> getAllStudents(){
        return new ResponseEntity<>(iservice.getAllStudents(), HttpStatus.FOUND);
    }

    @GetMapping("/student/{id}")
    public students getStudentById(@PathVariable Long id){
        return iservice.getStudentById(id);
    }

    @PutMapping("/update/{id}")
    public students updateStudentById(@RequestBody students Students, @PathVariable Long id){
        return iservice.updateStudentsById(Students,id);
    }
    @PostMapping
    public students addStudent(@RequestBody students Student){
        return iservice.addStudent(Student);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable Long id){
        iservice.deleteStudentsById(id);
    }
}
