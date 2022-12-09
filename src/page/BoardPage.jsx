import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BoardPage = (props) => {
  // name이란 이름으로 props값을 받아옴
  // 받아온 props값 확인 - RootIndex에서 컴포넌트에 직접 넣어준 props값
  const { name, outletname } = props;

  // 주소를 통해 전달해준 params 값을 가져와서 사용할 수 있다
  // params 안에 객체 형태로 들어있기 때문에
  // 구조화 할당을 통해서 사용 가능

  const { page, id } = useParams();

  // 5개의 데이터를 가지고있는 배열 작성
  // 그 중에서 동일한 id값을 가지고있는 내용만 출력
  // 자바스크립트의 배열의 메소드 사용
  // 1개의 값을 찾기위해 배열의 find 메소드 사용
  const [memos, setMemos] = useState([
    { id: 0, title: "첫번째 메모입니다" },
    { id: 1, title: "두번째 메모입니다" },
    { id: 2, title: "세번째 메모입니다" },
    { id: 3, title: "네번째 메모입니다" },
    { id: 4, title: "다섯번째 메모입니다" },
  ]);

  // 객체의 값을 돌려줄 경우에는 값을 다른 변수에 넣고 확인
  // 배열의 객체요소를 꺼내서 하나씩 비교하여 참인 요소를 return
  // 현재 id와 같은 메모를 memo변수에 저장함
  const memo = memos.find((m) => m.id === id);

  // useNavigate를 통해서 자바스크립트를 통해 주소이동
  const navigate = useNavigate();

  return (
    <div>
      {outletname}의 {name}board의 {id}페이지입니다 <br />
      <p>{memo ? memo.title : "값이 없는 페이지입니다"}</p>
      {/* navigate로 뒤로가기 : 뒤로가고 싶은 숫자만큼 navigate() 안에 적어주기 */}
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
      {/* navigate로 원하는 위치로 이동하기 : 이동하고 싶은 주소를 navigate() 안에 적어주기 */}
      <button
        onClick={() => {
          navigate("/board");
        }}
      >
        게시판 목록으로 이동
      </button>
    </div>
  );
};

export default BoardPage;
