package springlecture.springbootsecurity.config.jwt;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Getter
@Setter
@Component
@ConfigurationProperties("jwt") // application.properties와 매핑
public class JwtProperties {
    // applicate.properties의 값을 자바 클래스의 필드와 매핑시키는 작업이 필요
    private String issuer;
    private String secretKey;
}
