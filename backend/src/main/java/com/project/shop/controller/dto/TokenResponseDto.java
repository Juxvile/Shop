package com.project.shop.controller.dto;

import lombok.RequiredArgsConstructor;
import lombok.Value;

@RequiredArgsConstructor(staticName = "of")
@Value
public class TokenResponseDto {
    String username;
    String token;
}
