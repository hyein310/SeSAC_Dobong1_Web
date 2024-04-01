import styled from 'styled-components';

const MyButton = styled.a`
  position: relative;
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
  text-decoration: none;
  line-height: 1.6em;
  font-size: 1.2em;
  padding: 1.25em 2em;
  background-color: ${(props) => props.maincolor}; // props 할 때는 소문자로만....
  border: 2px solid ${(props) => props.subcolor};
  border-radius: 0.75em;
  user-select: none;
  transition: transform 0.15s ease-out;
  transform-style: preserve-3d;
  margin-top: 1em;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    left: 0;
    right: 0;
    background: ${(props) => props.subcolor};
    border-radius: inherit;
    box-shadow: 0 0 0 2px ${(props) => props.subcolor};
    transform: translate3d(0, 0.75em, -1em);
  }
  &:hover {
    background: ${(props) => props.hovercolor};
    transform: translateY(0.25em);
  }
`;

export default function Button({ text, clickEvent, maincolor, subcolor, hovercolor }) {
return (
<MyButton onClick={clickEvent} maincolor={maincolor} subcolor={subcolor} hovercolor={hovercolor}>
{text}
</MyButton>
);
}

