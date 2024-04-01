import Button from "./Button";
export default function SkyblueButton({ text, clickEvent }) {
  return (
    <Button
      text={text}
      clickEvent={clickEvent}
      maincolor="#c1e3ff"
      subcolor="#7cb8fd"
      hovercolor="#d7f6ff"
    ></Button>
  );
}
