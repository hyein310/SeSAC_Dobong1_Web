import { useNavigate, useSearchParams, useParams } from "react-router-dom"
import styled from "styled-components";

export default function StudentPage() {
    const navigate = useNavigate();
    const [queryParams, setQueryParams] = useSearchParams();
    const { studentName } = useParams();
    const QueryName = queryParams.get("name");
    
    const NewStudent = styled.span`
        color: blue;
        font-weight: 600;
    `

    const RealStudent = styled.span`
        color: red;
        font-weight: 600;
    `

    return (
        <main className="StudentPage">
            <h4>학생 이름은 <NewStudent>{studentName}</NewStudent> 입니다. </h4>
            {QueryName && 
            <h4>실제 학생 이름은 <RealStudent>{QueryName}</RealStudent> 입니다.</h4>
            }
            <button onClick={() => navigate(-1)}>이전 페이지로</button>
        </main>
    )
}


