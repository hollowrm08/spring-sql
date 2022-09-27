package com.example.demo.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@Setter
@Entity
@Table(name = "tb_subject")
public class Subject {
    @Id
    @Column(name = "id")
    private Integer id;

    @Column(name = "s_name")
    private String name;

    @Column(name = "s_abbreviation")
    private String abbreviation;

}
