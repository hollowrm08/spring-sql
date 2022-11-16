package com.example.demo.controller;

import com.example.demo.controller.response.UserResponse;
import com.example.demo.service.FindUserByLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private FindUserByLoginService findUserByLoginService;

    @GetMapping("{login}")
    public UserResponse findUserByLogin(@PathVariable String login){
        return findUserByLoginService.findUserByLogin(login);
    }

}
