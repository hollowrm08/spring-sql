package com.example.demo.service;

import com.example.demo.controller.response.UserResponse;
import com.example.demo.domain.User;
import com.example.demo.mapper.UserToUserResponseMapper;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class FindUserByLoginService {

    @Autowired
    private UserRepository repository;

    @Autowired
    private UserToUserResponseMapper mapper;

    //Todo: implement not found
    public UserResponse findUserByLogin(String login) {
        Optional<User> user = repository.findByLogin(login);
        return user.map(value -> mapper.apply(value)).orElse(null);
    }

}
