//초기값과 값을 수정or사용하는 리듀서 함수가 필요함

import { json } from "react-router-dom";

// <초기값> - 원하는 변수값을 다 넣을 수 있음
// 여러개의 값을 사용하기 때문에 객체형으로
const initialState = {
  number: 0,
};

// <값을 수정 or 사용하는 리듀서 함수>
function number(state = initialState, action) {
  // switch문을 사용해서 action.type 따른
  // 코드를 작성
  switch (action.type) {
    case "increase":
      // increase라는 액션이 발생했을 때 값이 1증가되는 내용
      // return을 통해서 값이 바뀐 state를 전달함
      // ...(스프레드) 연산자를 통해 그대로 들고옴
      // 이때 접근하는 state는 현재 number.js에서 작성한 initialState이다

      return { ...state, number /* number: 값의이름 */: state.number + 1 };

    // 값을 가져와서 사용할 때는 매개변수를 값으로 가져와서 사용
    case "setNumber":
      // 값을 받아와서 그 내용을 수정하는 것
      // 값을 받아오는 공간 : action.payload을 통해서 값 전달
      return { ...state, number: action.payload };

    default:
      return state; //값이 들어오지 않았을 때의 기본값
  }
}

// 액션함수 : {type:"리듀서이름"}을 return해서 사용하는 함수
// 다른 json, jsx에서 사용을 하게 됨 => export로 내보내줌
// 중괄호안에 적으면 리턴해서 돌려줌
export const increase = () => ({ type: "increase" });
// 값을 가져와서 사용해 줄때는, 매개변수로 값을 가져와서 사용
export const setNumber = (num) => ({ type: "setNumber", payload: num });

// 리듀서함수 number를 modules/index.js에 연결하기 위해 내보내줌
export default number;
