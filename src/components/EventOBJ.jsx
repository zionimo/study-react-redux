import { useState } from "react";

// 이벤트 객체와 몇가지 이벤트 확인
// 이벤트 객체 - 자바스크립트의 이벤트 객체
// 자바스크립트 형태 사용, node 로 접근이 가능
const EventOBJ = () => {
  // 시작할 때는 마우스가 올라가있지 않기때문에 false로 지정해둠
  const [onMouse, setOnMouse] = useState(false);

  return (
    <div>
      {/* 마우스가 올라와있는지 확인하기 위해 onMouseEnter */}
      <p
        onMouseEnter={(e) => {
          setOnMouse(true);

          // 이벤트 객체를 통해서 DOM값을 가져올 수 있다
          console.log("target", e.target);
          console.log("current-target", e.target);

          // 이벤트 객체를 통해서 가져온 DOM 값을
          // 자바스크립트에서 사용한 방식으로 수정할 수 있다
          e.target.style.color = "red";

          // 이벤트 객체를 통해서 자바스크립트 형식으로 값을 가져오기
          // innerHTML: html 전체내용을 들고옴
          console.log(e.currentTarget.innerHTML);

          // span태그로 들어가서 첫번째의 값을 들고오려면
          console.log(e.currentTarget.firstElementChild.innerHTML);

          // TCP스쿨에서 노드로 접근하는 법 확인해보기 :
          // http://www.tcpschool.com/javascript/js_dom_nodeAccess
        }}
        // 리액트에서 스타일을 바꿀 때 :
        // style 속성에 객체형태로 값을 넣을 수 있다
        // 값을 수정하기 위해 state의 값에 따라서 수정할 수 있다
        // state중심으로 화면이 업데이트 이후 => 데이터 중심으로 화면구성

        // 의미 : onMouse에 따라서 true라면(올라갔다면) red, false라면 색지정 x
        // 로그인 버튼에 써먹어야지
        style={onMouse ? { color: "red" } : { color: {} }}
      >
        {/* 글자 두껍게 만들어보기 */}
        <span style={{ fontWeight: "bold" }}>마우스</span>를 위로 올리세요 : {onMouse ? "올라갔음" : "올라가지 않음"}
      </p>
    </div>
  );
};

export default EventOBJ;
