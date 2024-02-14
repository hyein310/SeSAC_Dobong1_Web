const tbody = document.querySelector("tbody");

// 방명록 등록
// POST /visitor
function createVisitor() {
    const form = document.forms["visitor-form"];
    console.log(form);

    // 유효성 검사
    if(form.name.value.length === 0 || form.comment.value.length ===0) {
        alert("이름과 방명록 모두를 기입해주세요!");
        return;
    }

    if(form.name.value.length > 6) {
        alert('이름은 6글자 이하');
        return;
    }

    // axios
    axios ({
        method: "POST",
        url: "/visitor",
        data: {
            id: id,
            name: form.name.value,
            comment: form.comment.value,
        },
    })
    .then((response) => {
        console.log(response.data); //{id,name,comment}
        const { data } = response;
        const html = `
        <tr>
            <td>${data.id}</td>
            <td>${data.name}</td>
            <td>${data.comment}</td>
            <td>
            <button type="button" onclick="editVisitor(${data.id})">수정</button>
            </td>
            <td>
            <button type="button" onclick="deleteVisitor(this, ${data.id})">삭제</button>
            </td>
        </tr>
        `;

        tbody.insertAdjacentHTML("beforeend", html); // html 맨 뒤에 붙이겠다는 의미
    });
}

// 방명록 삭제
// DELETE /visitor
function deleteVisitor(btn, id) {
    console.log(btn);
    console.log(id);

    axios({
        method: "delete",
        url: '/visitor',
        data: {id: id,},
    })
    .then((res)=>{
        console.log(res.data);
        alert(res.data);

        // 실제 요소 지우기 (테이블)
        // remove
        btn.parentElement.parentElement.remove();

        // closest()
        // 특정 선택자를 가진 가장 가까운 조상 요소를 찾음
        // btn.closest(`#tr_${data.id}`).remove();
    });
}

// 방명록 수정
// PATCH /visitor
// 1. 수정을 위한 입력창으로 변경,
// 2. 수정버튼을 누르면 기존 데이터가 input의 value로 들어가게끔
//   ===> 한 개의 데이터 조회

const btnGroup = document.querySelector('#btn-group');
// GET /visitor/ :id
function editVisitor(id) {
    console.log(id);

    axios({
        method:"GET",
        url:`/visitor/${id}`,
        params: { id: id },
    })
    .then((res)=>{
        console.log(res);
        const { data } = res;
        console.log(data);
        const form = document.forms['visitor-form'];
        form.name.value = data.name;
        form.comment.value = data.comment;
        
    });

    const html = `
    <button type="button" onclick="editDo(${id})">수정</button>
    <button type="button" onclick="editCancle()">취소</button>
    `;
    btnGroup.innerHTML = html;

}

function editDo(id) {
    const form = document.forms['visitor-form'];
    axios ({

        url: '/visitor',
        method:'patch',
        data: {
            id:id,
            name:form.name.value,
            comment:form.comment.value,
        },
    })
    .then((res)=> {
        // 프론트에서 새로고침 안해도 데이터 변경 작동이 되도록

        const children = document.querySelector(`#tr_${id}`).children;  
        // tr의 자식인 td을 읽어오기 위해서 .children을 붙여줘야함. childred의 값은 배열로 저장됨

        console.log(children);
        children[1].textContent = form.name.value;
        children[2].textContent = form.comment.value;

        editCancle();
    });
}

// 취소 버튼을 누르거나, 수정이 끝난 후 실행
// input 초기화 이전버튼으로 되돌림
function editCancle() {
    const form = document.forms["visitor-form"];
    // input 초기화
    form.name.value = '';
    form.comment.value = '';

    // 등록 버튼으로 변경
    btnGroup.innerHTML=`<button type="button" onclick="createVisitor()">방명록 등록</button>`
}