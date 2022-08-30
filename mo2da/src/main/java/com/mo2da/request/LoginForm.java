package com.mo2da.request;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginForm {
    private String username;
    private String password;

    @Builder
    public LoginForm(String username, String password) {
        this.username = username;
        this.password = password;
    }
}
