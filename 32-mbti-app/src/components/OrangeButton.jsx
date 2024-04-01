import Button from "./Button";
export default function OrangeButton({text, clickEvent}) {
    return (
        <Button
        text={text}
        clickEvent={clickEvent}
        maincolor="#fae243"
        subcolor="#fa9f1a"
        hovercolor="#faf000"></Button>
    )
}