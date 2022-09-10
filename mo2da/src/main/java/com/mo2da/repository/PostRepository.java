package com.mo2da.repository;

import com.mo2da.request.PostForm;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Repository
public class PostRepository {
    @PersistenceContext
    private EntityManager em;
    private static int count;//현재 총 게시물의 수

    public void save(PostForm postForm){

    }
}
