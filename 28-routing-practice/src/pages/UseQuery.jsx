import { useSearchParams, useNavigate } from "react-router-dom"

export default function UseQuery() {
    const [queryParams, setQueryParams] = useSearchParams;
    const navigate = useNavigate();
    const studentName = queryParams.get("studentName");
    
    
    return (
        <main>
            <h5>학생 이름은 new 입니다.</h5>
            <h5>실제 학생 이름은 {studentName} 입니다.</h5>
            <button onClick={() => navigate(-1)}>이전 페이지로</button>
        </main>
    )
}