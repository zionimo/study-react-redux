import { useState } from "react";

const TestProps = (props) => {
  // props 값 product을 가져와서 아래 내용을 출력하세요
  // state값 input을 만들어서 값을 입력받으세요
  const { product, setProduct, children } = props;

  const [input, setInput] = useState("");

  return (
    <div>
      <h1>props 테스트 - 자식</h1>

      {/**product를 출력하세요 */}
      <h2>{product}</h2>

      {/** input의 값을 입력받는 공간 */}
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />

      {/** 받아온 setProduct이름을 수정 */}
      <button
        onClick={() => {
          setProduct(input);
        }}
      >
        물건 이름 수정
      </button>
      {/** children을 받아와서 출력하세요 */}
      {children}
    </div>
  );
};

export default TestProps;
