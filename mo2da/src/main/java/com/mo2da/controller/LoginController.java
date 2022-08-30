package com.mo2da.controller;

import com.mo2da.exception.JoinException;
import com.mo2da.exception.LoginException;
import com.mo2da.request.JoinForm;
import com.mo2da.request.LoginForm;
import com.mo2da.service.MemberService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
public class LoginController {

    @Autowired
    private MemberService memberService;

    @PostMapping("/join")
    public void join(@RequestBody JoinForm joinForm) throws JoinException {
        memberService.join(joinForm);
    }

    @PostMapping("/login")
    public void join(@RequestBody LoginForm loginForm) throws LoginException {
        memberService.login(loginForm);
    }

}
