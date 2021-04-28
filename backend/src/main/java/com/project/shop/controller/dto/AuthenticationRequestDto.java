package com.project.shop.controller.dto;

import lombok.*;

@RequiredArgsConstructor(staticName = "of")
@Value
public class AuthenticationRequestDto {
    String username;
    String password;
}
