package com.example.demo.controller;

import com.example.demo.controller.request.TopicRequest;
import com.example.demo.controller.response.TopicResponse;
import com.example.demo.service.CreateTopicService;
import com.example.demo.service.DeleteTopicByIdService;
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

    @Autowired
    private CreateTopicService createTopicService;

    @Autowired
    private DeleteTopicByIdService deleteTopicByIdService;

    @GetMapping("/list")
    @ResponseStatus(HttpStatus.OK)
    public List<TopicResponse> list(){
        return listTopicsService.listTopics();
    }
    //Todo: Change endpoint, user must not see all topics

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public TopicResponse create(@RequestBody TopicRequest request) {
        return createTopicService.createTopic(request);
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public void delete(@PathVariable Integer id) {
        deleteTopicByIdService.deleteById(id);
    }

}
