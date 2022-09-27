package com.example.demo.controller;

import com.example.demo.controller.response.TopicResponse;
import com.example.demo.service.ListTopicsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/topic")
public class TopicController {

    @Autowired
    private ListTopicsService listTopicsService;

    @GetMapping("/list")
    @ResponseStatus(HttpStatus.OK)
    public List<TopicResponse> list(){
        return listTopicsService.listTopics();
    }
    //Todo: Change endpoint, user must not see all topics

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public void create(){

    }

}
