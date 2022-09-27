package com.example.demo.controller;

import com.example.demo.controller.request.StudentRequest;
import com.example.demo.controller.request.TeacherRequest;
import com.example.demo.controller.response.SubjectResponse;
import com.example.demo.service.ListSubjectsService;
import com.example.demo.service.RegisterStudentService;
import com.example.demo.service.RegisterTeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/public")
public class PublicController {

    /*
     * Todo: implement endpoints
     * create register teacher
     * delete user?
     * */

    @Autowired
    private ListSubjectsService listSubjectsService;

    @Autowired
    private RegisterStudentService registerStudentService;

    @Autowired
    private RegisterTeacherService registerTeacherService;

    @GetMapping("/list-subjects")
    @ResponseStatus(HttpStatus.OK)
    private List<SubjectResponse> listSubjects(){
        return listSubjectsService.listSubjects();
    }

    @PostMapping("/register-student")
    @ResponseStatus(HttpStatus.CREATED)
    public void registerStudent(@RequestBody @Valid StudentRequest studentRequest){
        registerStudentService.register(studentRequest);
    }

    @PostMapping("/register-teacher")
    @ResponseStatus(HttpStatus.CREATED)
    public void registerTeacher(@RequestBody @Valid TeacherRequest teacherRequest){
        registerTeacherService.register(teacherRequest);
    }

    //Todo: Throw a better exception when login can't be done

}
