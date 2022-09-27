package com.example.demo.service;

import com.example.demo.controller.request.TeacherRequest;
import com.example.demo.domain.Teacher;
import com.example.demo.mapper.TeacherRequestToTeacherMapper;
import com.example.demo.repository.TeacherRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.security.crypto.password.PasswordEncoder;

import static org.mockito.ArgumentMatchers.any;

@RunWith(MockitoJUnitRunner.class)
public class RegisterTeacherServiceTest {

    @InjectMocks
    RegisterTeacherService tested;

    @Mock
    private TeacherRequestToTeacherMapper mapper;

    @Mock
    private PasswordEncoder encoder;

    @Mock
    private TeacherRepository repository;

    @Test
    public void testRegister() {
        String encryptedPassord = "$2a$10$UrAkJnRik63ljf591HG94.6jTBtde5GsbHK4HIjj0s2MGdcNJEVVe";
        TeacherRequest teacherRequest = this.mockTeacherRequest();
        Teacher teacher = this.mockTeacher();

        Mockito.when(mapper.apply(teacherRequest))
            .thenReturn(teacher);
        Mockito.when(encoder.encode(teacher.getPassword()))
            .thenReturn(encryptedPassord);

        tested.register(teacherRequest);

        Mockito.verify(mapper)
            .apply(teacherRequest);

        Mockito.verify(encoder)
            .encode(any(String.class));

        Mockito.verify(repository)
            .save(teacher);
    }

    private TeacherRequest mockTeacherRequest(){
        TeacherRequest teacherRequest = new TeacherRequest();
        teacherRequest.setPassword("login");
        teacherRequest.setPassword("password");

        return teacherRequest;
    }

    private Teacher mockTeacher(){
        Teacher teacher = new Teacher();
        teacher.setLogin("login");
        teacher.setPassword("password");

        return teacher;
    }

}