import { useNavigate } from "react-router-dom";


export default function CodingOnPage() {
    const navigate = useNavigate();
    const studentName = "codingon";

    return (
        <main className="StudentPage">
            <h4>학생 이름은 <span>{studentName} </span>입니다.</h4>
            <button onClick={() => navigate(-1)}>이전 페이지로</button>
        </main>
    )
}