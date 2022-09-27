package com.example.demo.service;

import com.example.demo.controller.response.TopicResponse;
import com.example.demo.domain.Topic;
import com.example.demo.domain.User;
import com.example.demo.mapper.TopicToPublicTopicResponse;
import com.example.demo.repository.TopicRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ListTopicsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TopicRepository repository;

    @Autowired
    private TopicToPublicTopicResponse publicMapper;

    public List<TopicResponse> listTopics(){
        String loginUser = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        Optional<User> usuario = userRepository.findByLogin(loginUser);

        //Todo: Verify if !usuario.isEmpty()

        List<Topic> listTopics = repository.findAll();
        return listTopics.stream()
                .filter(t -> !t.getAuthor().getId().equals(usuario.get().getId())) //must not see own topics
                //verify class
                //verify teacher or student (privacity)
                .map(t -> publicMapper.apply(t))
                .collect(Collectors.toList());

        //Todo: The user must not see his own topics calling list all
    }

}
