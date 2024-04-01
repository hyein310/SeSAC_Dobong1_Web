import Button from "./Button";
export default function PinkButton({ text, clickEvent }) {
  return (
    <Button
      text={text}
      clickEvent={clickEvent}
      maincolor="#f9c4d2"
      subcolor="#b18597"
      hovercolor="#ffe9e9"
    ></Button>
  );
}
