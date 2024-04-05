import { Link } from "react-router-dom";
import HeaderMenu from "../components/Header";
import PostList from "../components/practice/PostList";

export default function Practice() {
    return (
        <>
        <HeaderMenu></HeaderMenu>
        <Link to="/practice/matzip">맛집 페이지</Link>
        {/* <Link to="matzip">맛집 페이지</Link> */}
        <h4>연습 문제..</h4>
        <PostList></PostList>
        </>
    )
}