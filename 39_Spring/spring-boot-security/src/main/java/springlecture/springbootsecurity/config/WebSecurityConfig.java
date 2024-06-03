package springlecture.springbootsecurity.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.CsrfConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import springlecture.springbootsecurity.security.CustomAuthFilter;

@Configuration // Spring 설정 클래스임을 알리는 어노테이션
@EnableWebSecurity // 해당 클래스에서 Spring Security를 사용하기 위한 어노테이션
public class WebSecurityConfig {

    @Autowired
    private CustomAuthFilter customAuthFilter;

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        // 비밀번호 암호화 시 사용될 수 있도록 만듦
        return new BCryptPasswordEncoder();
    }
    @Bean // 메소드에 다는 어노테이션. 스프링 컨테이너가 관리할 수 있도록 등록
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        // 예외 처리를 필수로 진행할 수 있어야 함.
        // auth에 있는 모든 유저는 인증없이 접근할 수 있도록 설정
        http
                .csrf(CsrfConfigurer::disable) // 외부 post, put 요청 허용하기 위함
                .authorizeHttpRequests(authorize -> authorize
                                .requestMatchers("/auth/**").permitAll()
                                .anyRequest().authenticated() // 모든 요청은 인증이 있어야 접근 가능하다. 위에 걸러지지 않은 api는 모두 인증을 필요로 함

                // .permitAll(): 인증 X 접근 가능
                // .hasRole(): 특정 role 이 있어야 접근 가능 (ex. admin)
                // .hasAnyRole("admin", "teacher"): 파라미터로 넘긴 role 중 하나를 만족
        );

        http.addFilterBefore(customAuthFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}
