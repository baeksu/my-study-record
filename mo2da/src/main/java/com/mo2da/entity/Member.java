package com.mo2da.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Setter
@Getter
@Entity
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String password;
    private String city;
    private int age;

    @Builder
    public Member(String username, String password, String city, int age) {
        this.username = username;
        this.password = password;
        this.city = city;
        this.age = age;
    }

    public Member() {
    }
}
