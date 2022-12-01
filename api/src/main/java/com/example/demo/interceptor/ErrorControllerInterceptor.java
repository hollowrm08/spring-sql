package com.example.demo.interceptor;

import com.example.demo.controller.response.ErrorResponse;
import com.example.demo.exception.EntryNotFoundException;
import com.example.demo.exception.LoginIsBlankException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@ControllerAdvice
public class ErrorControllerInterceptor {

    @ExceptionHandler
    public ResponseEntity<ErrorResponse> handleException(Exception exception) {
        log.error("Ocorreu um erro inesperado: " + exception.getMessage(), exception);
        ErrorResponse errorResponse = new ErrorResponse("Ocorreu um erro inesperado na aplicação", HttpStatus.INTERNAL_SERVER_ERROR.value());
        return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    @ExceptionHandler
    public ResponseEntity<ErrorResponse> handleException(EntryNotFoundException exception) {
        log.error(exception.getMessage(), exception);
        ErrorResponse errorResponse = new ErrorResponse(exception.getMessage(), exception.getStatus().value());
        return new ResponseEntity<>(errorResponse, exception.getStatus());
    }

    @ExceptionHandler
    public ResponseEntity<ErrorResponse> handleException(LoginIsBlankException exception) {
        log.error(exception.getMessage(), exception);
        ErrorResponse errorResponse = new ErrorResponse(exception.getMessage(), exception.getStatus().value());
        return new ResponseEntity<>(errorResponse, exception.getStatus());
    }

}
