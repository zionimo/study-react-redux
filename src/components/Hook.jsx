import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const Hook = () => {
  const [count, setCount] = useState(1);
  const changeCount = () => {
    // setCount가 3번 진행이 되었기 때문에 결과값이 4가 출력이 되어야한다
    // 실행한 결과: 2
    // 아래작성한 코드는 비동기로 진행이되어서 원하는 값이 나오지 않는다
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  // setCount를 세번 실행했을때 +3이 되게하기위한 함수
  const changeCountFunc = () => {
    // setCount안에 익명함수 사용
    // 이전 state을 매개변수로 들고와서 사용한 후, 그 값을 return해서 돌려줌
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => {
      return prevState + 1;
    });
  };

  const [time, setTime] = useState(0);

  // 라이프 사이클 중 생성될때만 실행
  // 첫번째 값은 실행할 함수, 두 번째 값으로 빈 배열
  // 컴포넌트가 생성되자마자 실행하고 싶은 함수 또는 자바스크립트가 있을 때.
  // setInterval과 같이 타이머함수를 사용해 줄 때 사용.
  // 생성되자마자 실행할 이벤트를 DOM에 추가해주고 싶을 때
  useEffect(() => {
    console.log("생성될때만 실행됩니다");
    // 1초마다 실행할 함수를 작성
    // state와 함께 사용하는 부분 - time state 작성
    setInterval(changeTime, 1000);
  }, []);
  // changeTime 함수
  const changeTime = () => {
    // 값을 콜백으로 들고오면서 count와 time을 고정
    console.log("count", count);
    console.log("time", time);
    // 이전 state에 접근을 해서 그 값을 들고오는 형식으로 사용
    setTime((time) => time + 1);
  };

  // 생성하고, 모든 state값과 props값이 업데이트가 될때마다 실행
  // 업데이트 : 화면에 내용이 바뀔 때
  useEffect(() => {
    console.log("업데이트가 되었습니다");
  });

  // 특정값이 업데이트 될때마다 화면 업데이트
  // 두번째 값에 특정 state,props이 업데이트 될때마다
  // 함수가 실행될수 있도록 작성
  useEffect(() => {
    console.log("count가 실행되었습니다");
  }, [count]);

  // useRef를 통해서 DOM을 들고와서 확인
  // 현재컴포넌트를 생성할때, 그 화면에서 바로 들고 옴
  // 가져올 태그에 ref를 지정해서 들고옴
  const inputElement = useRef();
  useEffect(() => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    inputElement.current.style.color = `rgb(${r},${g},${b})`;
    document.title = `현재 time${time}`;
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  }, [time]);

  useEffect(() => {
    // useEffect에서 컴포넌트가 삭제될 때
    // 실행할 내용을 작성할 수 있다
    // 두번째 값에 [] 빈배열을 넣고, return에 원하는 함수 내용 작성
    // 라이프 사이클 중 생성과 삭제할 때만 실행하고 싶으면
    // 반드시 두번째 값에 [] 빈 배열을 넣고 작성.
    return console.log("삭제되었습니다");
  }, []);

  return (
    <div>
      <h1>Hook에 관하여</h1>
      <p>
        Hook은 리액트 16.8에서 추가된 버전, 이전버전에서는 클래스형으로 사용 <br />
        hook 함수형 컴포넌트에서 state와 라이프 사이클 사용
      </p>
      <h3>useState</h3>
      <p>
        컴포넌트 안에서 state를 사용할수 있게하는 hook <br />
        const [사용할 변수이름, 값을 수정할 함수] = useState(들어갈 값) <br />
        여러개 작성 가능, 들어갈 값에는 모든 자료형이 들어갈수 있다 <br />
        !useState는 비동기로 값을 넣어줌! : 값을 복잡하게 연속적 넣어줄때 문제가 생길수도있다 <br />
        *클래스형의 state도 비동기로 들어간다.
      </p>

      <button onClick={changeCount}>setCount 비동기: {count}</button>
      <button onClick={changeCountFunc}>setCount 안에 함수 사용 : {count}</button>
      <hr />

      <h3>useEffect</h3>
      <p>
        라이프사이클을 사용할수 있는 hook <br />
        컴포넌트의 생애주기 - 컴포넌트가 생성, 업데이트, 삭제 <br />
      </p>
      <h4>useEffect로 컴포넌트 생성할때 작성한 타이머 :{time}</h4>
      <hr />
      <h3>useRef 사용</h3>
      <input type="text" ref={inputElement} />
    </div>
  );
};

export default Hook;
