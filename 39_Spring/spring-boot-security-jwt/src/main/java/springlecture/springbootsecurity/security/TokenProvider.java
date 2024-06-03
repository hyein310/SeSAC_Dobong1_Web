package springlecture.springbootsecurity.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import springlecture.springbootsecurity.config.jwt.JwtProperties;
import springlecture.springbootsecurity.entity.UserEntity;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

@Component
public class TokenProvider {
    @Autowired
    private JwtProperties jwtProperties;

    public String create(UserEntity user) {
        Date expiredDate = Date.from(Instant.now().plus(1, ChronoUnit.DAYS)); // 하루 뒤

        return Jwts.builder()
                .signWith(SignatureAlgorithm.HS512, jwtProperties.getSecretKey()) // 암호화 방식, secret key
                .setSubject(String.valueOf(user.getId())) // 실제로 Payload에 담을 값
                .setIssuer(jwtProperties.getIssuer())
                .setExpiration(expiredDate) // 유효 기간
                .setIssuedAt(new Date()) // 언제 만들어 졌는지
                .compact();
    }

    // 입력된 token에서 payload에 있는 userId 뽑기
    public String validateAndGetUserId(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(jwtProperties.getSecretKey()) // 만들 때 지정해뒀던 시크릿 키
                .parseClaimsJws(token) // token이 위조되지 않았다면 payload를 return
                .getBody();

        return  claims.getSubject();
    }
}
