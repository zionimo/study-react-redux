import { useState } from "react";

// 부모컴포넌트 (자식은 TestBox)
const TestEvent = (memo) => {
  const [memos, setMemo] = useState([
    { id: 1, text: "메모1" },
    { id: 2, text: "메모2" },
    { id: 3, text: "메모3" },
    { id: 4, text: "메모4" },
  ]);

  const [user, setUser] = useState([
    { id: 1, name: "홍길동", number: "000-1111-2222" },
    { id: 2, name: "성춘향", number: "000-1111-2222" },
    { id: 3, name: "변사또", number: "000-1111-2222" },
  ]);

  // onMouseEnter,onMouseLeave를 사용하여
  // 마우스가 div 위에 있다면 배경색 밝은 회색,
  // 마우스가 떠났다면 흰색으로 작성하세요
  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <div>
      <h3>이벤트 테스트 공간입니다</h3>
      {/*map을 통해서 전체 내용을 출력해주세요*/}
      {/* {}는 자바스크립트를 출력해줌 */}
      {/* map 메소드를 통해 배열가져와서  */}
      {user.map((memo) => (
        <div key={memo.id}>
          <p>{memo.text}</p>
        </div>
      ))}
      {/* TestBox를 이용하여 내용을 출력해주세요*/}
      memos.map((memo) => (
      <TestBox memo={memo} setMemo={setMemo} memos={memos} />
      ))
      <div
        onMouseEnter={(e) => {
          setMouseEnter(true);
        }}
        onMouseLeave={(e) => {
          setMouseEnter(false);
        }}
        style={mouseEnter ? { backgroundColor: "lightgray" } : { backgroundColor: "white" }}
      >
        마우스가 올라갔나요? : {mouseEnter ? "예" : "아니오"}
      </div>
    </div>
  );
};

//TestEvent에서 사용할 TestBox
// TestBox는 자식 (부모는 TesxtEvent)
const TestBox = (props) => {
  // memo와 setMemos를 props값으로 들고오기
  const { memo, setMemo, memos } = props;

  //수정창을 닫고 여는 state 참이면 수정을 하기위해 창을 열고 거짓이면 수정 안할거니까 창 닫음
  const [modify, setModify] = useState(false);
  // 수정할 내용을 저장하는 state
  const [input, setInput] = useState("");

  return (
    <div>
      {/* memo의 값 들고오기 */}
      <h4>{memo.text}</h4>

      {/* modify true일때 화면에 출력 */}
      {/* true 일때, input의 값을 입력받고, */}
      {/* 버튼을 누르면 그 값이 setMemos로 수정되고 modify가 false로 바뀜 */}
      {modify ? (
        // 참이면 수정차잉 뜬다
        <div>
          <input
            type="text"
            // onchange될때마다 input값을 받아옴
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // 수정된 객체
              const modifyMemo = { ...memo, text: input };

              setMemo(
                // map으로 배열을 가져와 수정함
                // map에서 m이라는 배열의 요소를 가져와 memeo의 id와 비교하여 같다면 수정된 내용 수정, 아니라면 원래값 return
                // 수정된 새 내용을 setMemo를 통해 전달
                memos.map((m) => (m.id == memo.id ? modifyMemo : m))
              );
            }}
          >
            수정완료
          </button>
        </div>
      ) : (
        // 수정 버튼을 누르면 modify가 true가 됨
        <button
          onClick={() => {
            setModify(true);
          }}
        >
          수정
        </button>
      )}
    </div>
  );
};

export default TestEvent;
