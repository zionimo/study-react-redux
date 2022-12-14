import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// 액션함수를 임포트해줘야함
import { increase, decrease, setNum } from "./modules/number";

const NumberBox = () => {
  // number: number.js의 name값
  const num = useSelector((state) => state.number.num);
  const dispatch = useDispatch();

  const [input, setInput] = useState(0);
  console.log(setNum());
  return (
    <div>
      <h1>{num}</h1>
      <button
        onClick={() => {
          dispatch(increase());
        }}
      >
        1증가
      </button>
      <button
        onClick={() => {
          dispatch(decrease());
        }}
      >
        1감소
      </button>
      <button onClick={() => dispatch(setNum(10))}>값을 10으로 수정</button>
      <input
        type="text"
        // num 값을 input에 입력한 값으로 수정해주는 함수
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      {/* num 값을 input에 입력한 값으로 수정해주는 함수 */}
      <button onClick={dispatch(setNum(input))}>원하는 값으로 수정</button>
    </div>
  );
};

export default NumberBox;
