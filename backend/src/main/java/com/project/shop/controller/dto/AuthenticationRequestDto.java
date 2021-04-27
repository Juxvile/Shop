package com.project.shop.controller.dto;

import lombok.*;

@Builder
@Value(staticConstructor="of")
public class AuthenticationRequestDto {
    String username;
    String password;
}
