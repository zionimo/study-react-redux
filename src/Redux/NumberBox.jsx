import { useDispatch, useSelector } from "react-redux";
import { increase, setNumber } from "./modules/number";

const NumberBox = () => {
  // 리덕스를 사용해서 그 값을 가져오려함

  // number.js에서 일부만(number) 가져올 때
  const number = useSelector(
    (state) =>
      state /* useSelector의 화살표함수를 통해서 modules/index.js의 전체 state에 접근 */
        .number /* modules/index.js의 {number}에서 number.js의 state객체의 */.number /* number의 숫자값을 가져옴 */
  );
  // number.js에서 전체값을 가져올 때
  const numberObj = useSelector((state) => state.number);

  // 리덕스에서 작성한 리듀서를 가져오기 위한 useDispatch
  // dispatch를 사용할 때
  const dispatch = useDispatch();
  return (
    <div>
      <h3>리덕스를 사용할 공간입니다</h3>
      <p>useSelector를 통해서 가져온 값 : {number}</p>
      <p>useSelector를 통해서 가져온 값 : {numberObj.number}</p>

      {/* 버튼을 눌렀을 때 1증가되는 버튼 만들기 */}
      <button
        onClick={() => {
          dispatch({ type: "increase" });
        }}
      >
        1증가
      </button>
      {/* 같은 내용을 number.js에서 액션함수 increase값을 가져와서 만들어보기 */}
      <button
        onClick={() => {
          dispatch(increase());
        }}
      >
        1증가(함수)
      </button>

      {/* setNumber을 통해서 값을 수정 : 객체형태 */}
      <button
        onClick={() => {
          dispatch({ type: "setNumber", payload: 0 });
        }}
      >
        0으로 초기화
      </button>
      <button
        onClick={() => {
          dispatch(setNumber(100));
        }}
      >
        100으로 초기화
      </button>
    </div>
  );
};

export default NumberBox;
