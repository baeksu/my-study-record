package com.mo2da.service;

import com.mo2da.exception.JoinException;
import com.mo2da.repository.MemberRepository;
import com.mo2da.request.JoinForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class MemberService {

    @Autowired
    private MemberRepository memberRepository;

    @Transactional
    public void join(JoinForm joinForm) throws JoinException {
        memberRepository.save(joinForm);
    }
}
