package com.mo2da.request;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class JoinForm {
    private String username;
    private String password;
    private String city;
    private int age;

    public JoinForm(String username, String password, String city, int age) {
        this.username = username;
        this.password = password;
        this.city = city;
        this.age = age;
    }

    @Override
    public String toString() {
        return "JoinForm{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", city='" + city + '\'' +
                ", age=" + age +
                '}';
    }
}
