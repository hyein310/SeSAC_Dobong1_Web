const express = require("express");
const app = express();
const PORT = 8080;

/*
    - EJS 템플릿

    <% ... %>: JavaScript 코드 실행
    <%= ... %>: JavaScript 표현식의 결과를 문자열로 변환하여 출력
    <%- ... %>: 이스케이프되지 않은(raw) 데이터 출력, HTML태그를 웹 브라우저에서 해석해서 보여주고 싶을 때 주로 사용합니다.
    <%# ... %>: 주석 처리, 클라이언트 웹 브라우저에서는 보이지 않게 됩니다.
    <%% ... %>: 리터럴 구문 출력 (예: <%%는 <%로 출력됩니다.)

    변수를 사용하려면, <%= 변수명 %> 구문을 사용

    extends 지원 X -> include 사용
        ex) <%- include('header') %>
    동적 렌더링 위해서 설정
*/

// app.set : 애플리케이션 전체에 값 설정
// view engine : 서버에서 처리한 데이터 결과값을 정적인 페이지 HTML파일에 출력하기 위해 사용
// views : 내가 저장할 폴더 설정
app.set("view engine", "ejs");
app.set("views", "./views");


// index.ejs랑 ./views 코드 받기!!!!!!!!!!

// app. get : app 객체에서 읽을 수 있으며, 애플리케이션에서 데이터를 공유하는 한 방법
app.get("/", (request, response) => {
  //   response.send("hello express!! 안녕하세요 익스프레스");
  response.render("index.ejs");
});

app.listen(PORT, function () {
  console.log("http://localhost:" + PORT);
});