package com.example.demo.service;

import com.example.demo.controller.request.StudentRequest;
import com.example.demo.domain.Student;
import com.example.demo.mapper.StudentRequestToStudentMapper;
import com.example.demo.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class RegisterStudentService {

    @Autowired
    private StudentRequestToStudentMapper mapper;

    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    private StudentRepository repository;

    public void register(StudentRequest request){
        Student student = mapper.apply(request);
        student.setPassword(encoder.encode(student.getPassword()));

        repository.save(student);
    }

}
