package com.example.demo.controller;

import com.example.demo.controller.request.StudentRequest;
import com.example.demo.controller.request.TeacherRequest;
import com.example.demo.controller.response.StudentResponse;
import com.example.demo.controller.response.SubjectResponse;
import com.example.demo.controller.response.TeacherResponse;
import com.example.demo.controller.response.VerifyLoginUsageResponse;
import com.example.demo.service.ListSubjectsService;
import com.example.demo.service.RegisterStudentService;
import com.example.demo.service.RegisterTeacherService;
import com.example.demo.service.VerifyLoginUsageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/public")
public class PublicController {

    @Autowired
    private ListSubjectsService listSubjectsService;

    @Autowired
    private RegisterStudentService registerStudentService;

    @Autowired
    private RegisterTeacherService registerTeacherService;

    @Autowired
    private VerifyLoginUsageService verifyLoginUsageService;

    @GetMapping("/list-subjects")
    @ResponseStatus(HttpStatus.OK)
    private List<SubjectResponse> listSubjects(){
        return listSubjectsService.listSubjects();
    }

    @PostMapping("/register-student")
    @ResponseStatus(HttpStatus.CREATED)
    public StudentResponse registerStudent(@RequestBody @Valid StudentRequest studentRequest){
        return registerStudentService.register(studentRequest);
    }

    @PostMapping("/register-teacher")
    @ResponseStatus(HttpStatus.CREATED)
    public TeacherResponse registerTeacher(@RequestBody @Valid TeacherRequest teacherRequest){
        return registerTeacherService.register(teacherRequest);
    }

    @GetMapping("/verify-login-usage/{login}")
    public VerifyLoginUsageResponse verifyLoginUsage(@PathVariable String login) {
        return verifyLoginUsageService.verify(login);
    }


}
