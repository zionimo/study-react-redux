import { useState } from "react";
import PropsChildren from "./PropsChildren";
import StateBox from "./StateBox";

const PropsParent = () => {
  const [count, setCount] = useState(1);

  return (
    <div>
      {/* 자식에서 작성한 setCount 내용이 부모의 내용에도 반영된다 */}
      <h3>PropsParent, count : {count} </h3>
      {/* 내용들을 props형태로 자식에게 넘기는중 */}
      <PropsChildren
        name="green"
        count={count}
        setCount={setCount}
        // 만들어진 컴포넌트에 on이벤트는 props값으로 들어간다
        // 자식컴포넌트에 props값으로 보내주지 않으면 버튼을 눌러도 콘솔에 나타나지 않음
        onClick={() => {
          console.log("클릭했습니다");
        }}
      >
        태그 사이에 들어가는 값 : {count} <br />
        태그도 들어갈 수 있다. <br />
        원한다면 컴포넌트도 넣을 수 있다 <br />
        map을 이용하여 컴포넌트를 children에 전달할 수 있다
        <StateBox />
      </PropsChildren>
    </div>
  );
};

export default PropsParent;
