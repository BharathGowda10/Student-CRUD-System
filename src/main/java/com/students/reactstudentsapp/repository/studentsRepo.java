package com.students.reactstudentsapp.repository;

import com.students.reactstudentsapp.model.students;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Optional;

@Repository
public interface studentsRepo extends JpaRepository<students,Long> {
    Optional<students> findByEmail(String email);
}
