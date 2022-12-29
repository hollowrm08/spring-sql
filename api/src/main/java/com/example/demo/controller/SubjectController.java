package com.example.demo.controller;

import com.example.demo.controller.request.SubjectRequest;
import com.example.demo.controller.response.SubjectResponse;
import com.example.demo.service.CreateSubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/subject")
public class SubjectController {

    @Autowired
    private CreateSubjectService createSubjectService;

    @PostMapping
    public SubjectResponse registerSubject(@RequestBody SubjectRequest request) {
        return createSubjectService.create(request);
    }

}