package com.mo2da.service;

import com.mo2da.exception.JoinException;
import com.mo2da.exception.LoginException;
import com.mo2da.repository.MemberRepository;
import com.mo2da.request.JoinForm;
import com.mo2da.request.LoginForm;
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

    @Test
    @DisplayName("/login 요청에 대한 로그인 성공 테스트")
    public void test2() throws Exception {
        //given
        JoinForm joinForm = new JoinForm("baeksu", "123", "서울", 30);
        memberService.join(joinForm);

        //when
        LoginForm loginForm = LoginForm.builder()
                .username("baeksu")
                .password("123")
                .build();
        Long id = memberService.login(loginForm);
        Assertions.assertEquals(1L, id);
    }

    @Test
    @DisplayName("/login 요청에 대한 로그인 실패 테스트")
    public void test3() throws Exception {
        //given
        //존재하지 않는 사용자일 때

        //when
        LoginForm loginForm = LoginForm.builder()
                .username("baeksu")
                .password("123")
                .build();
        Assertions.assertThrows(LoginException.class, () -> memberService.login(loginForm));

    }

}