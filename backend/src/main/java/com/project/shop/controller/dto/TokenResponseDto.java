package com.project.shop.controller.dto;

import lombok.Builder;
import lombok.Value;

@Builder
@Value(staticConstructor = "of")
public class TokenResponseDto {
    String username;
    String token;
}
