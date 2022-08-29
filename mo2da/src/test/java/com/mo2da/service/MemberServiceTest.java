package com.mo2da.service;

import com.mo2da.exception.JoinException;
import com.mo2da.repository.MemberRepository;
import com.mo2da.request.JoinForm;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@AutoConfigureMockMvc
class MemberServiceTest {
    @Autowired
    MockMvc mockMvc;

    @Autowired
    MemberRepository memberRepository;

    @Autowired
    MemberService memberService;



    @Test
    @DisplayName("/join post 중복 아이디 요청")
    public void test1() throws Exception {
        //이미 같은 데이터 입력
        JoinForm joinForm = new JoinForm("baeksu", "123", "서울", 30);
        memberService.join(joinForm);
        JoinForm joinForm2 = new JoinForm("baeksu", "333", "경기", 30);

        Assertions.assertThrows(JoinException.class, () -> memberService.join(joinForm2));
    }

}