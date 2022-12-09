// props로 name이 "green"인 값을 부모에게서 값을 받아옴
const PropsChildren = (props) => {
  // props의 값이 여러개가 들어오기 떄문에
  // 객체의 형태로 사용 > 구조화 분해 이용

  // porps로 받아오는 값들
  // 문자열, {}로 감싸서 보내진 자바스크립트의 변수/함수
  // 작성한 컴포넌트에 on이벤트에 작성하면 props 값으로 들어온다
  const { name, count, setCount, onClick } = props;

  // 부모 컴포넌트에서 태그사이에 적은 값은 children props로 가져올 수 있다
  const { children } = props;

  return (
    // 받아온 onClick props 넣어주기
    <div onClick={onClick}>
      <hr />
      <h3>
        PropsChildren 컴포넌트입니다 : {name}, count: {count}
      </h3>

      {/* setCount와 count 사용하기 */}
      {/* +1버튼을 누르면 값이 1씩 증가함 */}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        + 1
      </button>

      {/* 부모 컴포넌트에서 태그사이에 적은 값은 children props로 가져올 수 있다 */}
      {children}
    </div>
  );
};

export default PropsChildren;
