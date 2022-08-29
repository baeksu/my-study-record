package com.mo2da.controller;

import com.mo2da.entity.Member;
import com.mo2da.exception.JoinException;
import com.mo2da.repository.MemberRepository;
import com.mo2da.request.JoinForm;
import com.mo2da.service.MemberService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import static org.junit.jupiter.api.Assertions.*;


@SpringBootTest
@AutoConfigureMockMvc
class LoginControllerTest {
    @Autowired
    MockMvc mockMvc;

    @Autowired
    MemberRepository memberRepository;

    @Autowired
    MemberService memberService;


    @Test
    @DisplayName("/join post 정상적인 요청")
    public void test1() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post("/join")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"username\":\"baeksu\",\"password\":\"123\",\"city\":\"서울\",\"age\":\"30\"}"))
                .andDo(MockMvcResultHandlers.print());

        Member findMember = memberRepository.findByUsername("baeksu");
        Assertions.assertEquals(findMember.getCity(),"서울");
    }




}