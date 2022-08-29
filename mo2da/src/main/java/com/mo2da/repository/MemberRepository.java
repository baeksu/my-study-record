package com.mo2da.repository;

import com.mo2da.entity.Member;
import com.mo2da.exception.JoinException;
import com.mo2da.request.JoinForm;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
public class MemberRepository {

    @PersistenceContext
    private EntityManager em;

    public void save(JoinForm joinForm) throws JoinException {

        //중복 체크하는 로직 넣어줘야 함
        if (findByUsername(joinForm.getUsername()) != null) {
            throw new JoinException("중복 아이디 입니다.");
        }

        Member member = Member.builder()
                .username(joinForm.getUsername())
                .password(joinForm.getPassword())
                .city(joinForm.getCity())
                .age(joinForm.getAge())
                .build();

        em.persist(member);
    }

    public Member findByUsername(String username){
        List<Member> members = em.createQuery("select m from Member m where m.username =:username", Member.class)
                .setParameter("username", username)
                .getResultList();

        return members.size() != 0 ? members.get(0) : null;
    }
}
