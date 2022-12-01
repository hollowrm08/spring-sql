package com.example.demo.controller;

import com.example.demo.controller.response.UserResponse;
import com.example.demo.controller.response.VerifyLoginUsageResponse;
import com.example.demo.service.DeleteByLoginService;
import com.example.demo.service.FindUserByLoginService;
import com.example.demo.service.VerifyLoginUsageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotEmpty;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private FindUserByLoginService findUserByLoginService;

    @Autowired
    private DeleteByLoginService deleteByLoginService;

    @GetMapping("{login}")
    public UserResponse findUserByLogin(@PathVariable String login) {
        return findUserByLoginService.findUserByLogin(login);
    }

    @DeleteMapping("{login}")
    public void deleteByLogin(@PathVariable String login) {
        deleteByLoginService.deleteUser(login);
    }

}
