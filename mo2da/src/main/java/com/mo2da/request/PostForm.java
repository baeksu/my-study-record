package com.mo2da.request;

import lombok.Builder;
import lombok.Getter;

@Getter
public class PostForm {
    private String username;
    private String title;
    private String content;

    @Builder
    public PostForm(String username, String title, String content) {
        this.username = username;
        this.title = title;
        this.content = content;
    }
}
