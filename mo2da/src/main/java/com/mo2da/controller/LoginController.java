package com.mo2da.controller;

import com.mo2da.exception.JoinException;
import com.mo2da.request.JoinForm;
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
        System.out.println("joinForm = " + joinForm);

        memberService.join(joinForm);
    }

}
