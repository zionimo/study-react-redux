import { useEffect, useState } from "react";

const EventBox = () => {
  const [changeName, setChangeName] = useState("");
  // changeName 받아옴
  const [clickName, setClickName] = useState("");
  // 변수 name 받아옴
  const [varName, setVarName] = useState("");

  let name = "aa"; //화면에 출력되지 않고 많이 바뀌는 값들에 사용함 이 값을 화면에 출력하고 싶다면 state에 담아서 화면이 바뀌도록
  const funcName = (n) => {
    name = n;
  };
  useEffect(() => {}, [name]);

  // 객체 state에 이벤트로 값 넣기 -
  // 1. 각각의 속성에 값을 넣어줘야 한다.(name, address에 ""값 넣어줌)
  // 2. 남은 속성의 값을 유지 => ...(스프레드연산자) 는 객체나 배열 안에 있는 요소의 값을 꺼낸다
  const [user, setUser] = useState({
    name: "",
    address: "",
  });

  // 이벤트에 들어갈 중복되는 내용을 함수로 만든다
  const changeUser = (e) => {
    // 변수의 값을 속성으로 사용하기 위해 []를 쓴다
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // 변수: 고정해서 쓸 값, 화면상에서 바뀌지 않을 값. 컴포넌트를 반복해서 출력하기 위해 배열 사용함
  // name, address를 가진 info라는 배열 변수 만들기
  // info값을 반복해서 출력해보기
  const info = ["name", "address"];

  // 속성을 잘못 써도 오류가 나지 않기 때문에 오타 조심하기
  const infoObj = [
    { name: "name", info: "이름", id: 1 },
    { name: "address", info: "주소", id: 2 },
  ];

  return (
    <div>
      <h3>이벤트박스</h3>
      <h4>
        state로 작성한 이름: {changeName}, 변수이름: {name}
      </h4>
      <input type="text" onChange={(e) => setChangeName(e.target.value)} />
      <br />
      <button
        onClick={() => {
          setClickName(changeName);
        }}
      >
        state 값을 저장
      </button>
      <br />
      <input type="text" onChange={(e) => funcName(e.target.value)} />
      <br />
      <button
        onClick={() => {
          setVarName(name);
        }}
      >
        변수값을 가져와서 저장
      </button>
      <h4>
        state값을 가져와서 저장: {clickName}, 변수값을 가져와서 저장: {varName}
      </h4>
      <hr />
      <h3>객체의 값 바꾸기</h3>
      <p>
        유저의 이름:{user.name}, 유저의 주소:{user.address}
      </p>
      이름:{" "}
      <input
        type="text"
        name="name"
        // ... 사용하여 객체안의 값을 전부 가져오고
        // 그 안의 값을 바꾸고 싶다면 바꾸고 싶은 속성의 이름을 사용
        onChange={changeUser}
      />
      <br />
      주소:{" "}
      <input
        type="text"
        name="address"
        // 위의 코드와 중복되는 (e) => {setUser({ ...user, name: e.target.value}) 부분을 위쪽에서 함수로 작성함
        onChange={changeUser}
      />
      <h3>배열을 통해서 컨포넌트/태그 반복하기</h3>
      <p>배열의 값(문자열/컴포넌트)도 html에 그대로 출력할 수 있다</p>
      <h4>
        {user.name},{user.address}
      </h4>
      {info}
      {
        // 배열을 map을 통해서 반복
        // map은 배열의 메소드이므로 배열이 아니면 사용할 수 없다
        // 역할: 배열의 값을 꺼내고 return하여 새로운 배열을 작성할 수 있다.
        // 새로운 배열로 작성할 때 원하는 모양으로 출력할 수 있다

        // map함수를 사용해보자
        // info는 배열이고, information은 배열안에 있는 요소이다
        // index는 현재 가져온 배열 안에 있는 요소의 index를 가져온 것이다
        // map을 사용할 대는 중괄호가 아닌 괄호를 사용한다
        // 이유: return값을 통해서 태그나 컴포넌트를 사용하기 위함이다 (고로 div태그로 감싸주어야한다)
        info.map((information, index) => (
          <div>
            {/* information을 가져옴 */}
            {information}
            <input
              type="text"
              name={information}
              onChange={changeUser}
              // map사용시 key 값을 작성해야함
              key={index}
            />
          </div>
        ))
      }
      <hr />
      <h3>객체의 배열 - map사용</h3>
      {/* infoObj: 객체는 리액트에서 바로 출력할 수 없으므로 배열형으로 작성해야한다 */}
      {/* 객체형인 {infoObj} 이라고 쓰면 오류뜸. {infoObj[0].info} 라고 작성해야 함 */}
      {/* index대신 id 사용하기 */}
      {infoObj.map((information) => {
        // {}를 사용했다면 return을 사용해서 값을 내보냄
        return (
          <div>
            {information.info}
            <input type="text" name={information.name} key={information.id} onChange={changeUser} />
          </div>
        );
      })}
      <hr />
      <h3>filter함수 사용</h3>
      {/* filter함수는 return값이 true이면 새로운 배열에 넣어준다 */}
      {/* false라면 새로운 배열에 넣지 않는다 */}
      {/* 원본 배열에는 영향을 미치지 않는다 */}
      {/* 의미: information이 name인 것만 가져오겠다 */}
      {info.filter((information) => information == "name")}
      {/* 원본 배열의 값을 바꾸고 싶다면, 그 원본 배열의 값에 새로 만들어진 배열을 넣어주어야 한다 */}
      {/* filter의 결과값이 배열이기 때문에 map을 이용해서 다시 화면에 출력할 수 있다 */}
      {/* map을 이용해서 다시 화면에 출력할 수 있다 */}
      {infoObj
        // 의미: id가 2가 맞다면 info의 정보를 가져와서 "수정된 주소"를 출력한다 false라면 원래 값인 '주소'가 출력됨
        .filter((information) => information.id == 2)
        .map((information) => (information.id == 2 ? { ...information, info: "수정된 주소" } : information))
        .map((information) => (
          <p>{information.info}</p>
        ))}
    </div>
  );
};

export default EventBox;
