import { useState } from "react";

const StateBox = () => {
  // 얘네가 state
  const [name, setName] = useState("승연");
  const [input, setInput] = useState("");

  //inputName을 받아와서 inputName+"입니다"를 return해주는 내용
  const printName = (inputName) => {
    return inputName + "입니다";
  };

  // 리액트는 html 값을 변수에 넣어서 사용할 수 있다
  // 여러 줄을 사용할 때는 하나의 태그로 묶어서 작성
  const element = (
    <div>
      <h3>자바스크립트의 변수안에 넣어서 사용할 수 있다</h3>
      <p>단, 여러개의 태그는 하나의 태그로 묶어서 사용</p>
    </div>
  );

  return (
    <div>
      <h1>:{name}입니다</h1>
      <p>
        변수는 중괄호 안에 이름을 넣으면 값이 그대로 출력되고, <br />
        함수는 ()를 통해 내용을 실행시킬 수 있다
      </p>
      <p>{printName("학생")}</p>
      {element}

      <hr />

      {/*  {input}값이 아닌 {name}으로 지정해두었으므로 input에 값을 입력해도 값이 변경되지 않는다 */}
      <h3>값을 입력받아서 확인하기 : {name}</h3>
      {/* onChange:  함수가 실행될 때마다 값이 바뀌는 이벤트. mdn에서 확인
      onchange로 받아온 이벤트를 타겟에 보내고, 
      바뀐 input을 통해 vlaue값을 받아와서 setInput에 넣어주는 내용 */}
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />

      {/* input으로 입력받은 내용을 setName에 넣어주는 내용 */}
      <button
        onClick={() => {
          setName(input);
        }}
      >
        이름 수정
      </button>
    </div>
  );
};

export default StateBox;
