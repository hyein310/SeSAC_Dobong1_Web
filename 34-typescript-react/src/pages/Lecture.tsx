import HeaderMenu from "../components/Header";
import Container from "../components/lecture/Container";
import { Props1, Props2, Props3 } from "../components/lecture/Props";
import Text from "../components/lecture/Text";
import EventObj from "../components/lecture/EventObj";
import TodoList from "../components/lecture/TodoList";
import GenericList from "../components/lecture/GenericList";

export default function Lecture() {
    return (
        <>
            <HeaderMenu></HeaderMenu>
                <h1>수업 코드</h1>
            <Container>
                {/* <Props1 name="hyein" />
                <Props2 width="100px" height="100px" color="pink"/>
                <Props3 width={100} height={100} text="hello" color="yellow" /> */}
                {/* <Text /> */}
                {/* <EventObj /> */}
                {/* <TodoList /> */}
                <GenericList />
            </Container>
        </>
    )
}