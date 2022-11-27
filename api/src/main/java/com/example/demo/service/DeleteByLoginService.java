package com.example.demo.service;

import com.example.demo.domain.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DeleteByLoginService {

    @Autowired
    private UserRepository userRepository;

    //Todo: refactor to notfound
    public void deleteUser(String login) {
        Optional<User> user = userRepository.findByLogin(login);
        user.ifPresent(value -> userRepository.delete(value));
    }

}
