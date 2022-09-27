package com.example.demo.service;

import com.example.demo.controller.request.TeacherRequest;
import com.example.demo.domain.Teacher;
import com.example.demo.mapper.TeacherRequestToTeacherMapper;
import com.example.demo.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class RegisterTeacherService {

    @Autowired
    private TeacherRequestToTeacherMapper mapper;

    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    private TeacherRepository repository;

    public void register(TeacherRequest request){
        Teacher teacher = mapper.apply(request);
        teacher.setPassword(encoder.encode(teacher.getPassword()));

        repository.save(teacher);
    }

}
