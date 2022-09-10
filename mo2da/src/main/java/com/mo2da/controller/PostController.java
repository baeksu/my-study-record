package com.mo2da.controller;


import com.mo2da.request.PostForm;
import lombok.Getter;
import org.springframework.web.bind.annotation.*;

@RestController
public class PostController {

    @PostMapping("/post")
    public void post(@RequestBody PostForm postForm) {

    }
}
