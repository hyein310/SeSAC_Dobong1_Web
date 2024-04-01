import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import SkyblueButton from "../components/SkyblueButton";
import { check, next } from "../store/modules/mbti";
import Progress from "../components/Progress";

export default function Mbti() {
  const survey = useSelector((state) => state.mbti.survey);  // [{question, answer:[{text, result}]}, {question, answer:[{text, result}]}]
  const page = useSelector((state) => state.mbti.page);
  const dispatch = useDispatch();

  const SurveyQuestion =styled.p`
    font-size: 1.5rem;
    color: #777;
  `;

  const Vs = styled.p`
    font-size: 2rem;
    padding-top: 1rem;
  `;

  return (
    <>
      <SurveyQuestion>{survey[page - 1].question}</SurveyQuestion>
      <ul>
        {/* 페이지 별로 다른 질문이 나오게 함 start page가 존재 하기 때문에 -1 */}
        {survey[page - 1].answer.map((el, index) => {
          return (
            <li key={index}>
              <SkyblueButton text={el.text} clickEvent={()=>{
                dispatch(next())
                dispatch(check(el.result))
                }} />
              {index === 0 && <Vs>VS</Vs>}
            </li>
          );
        })}
      </ul>
      <Progress page={page} maxPage={survey.length}/>
    </>
  );
}
