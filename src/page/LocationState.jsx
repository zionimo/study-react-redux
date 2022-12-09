import { useLocation } from "react-router-dom";

// Link의 state로 전달해준 값을 useLocation으로 확인

const LocationState = () => {
  // hook을 사용할 때는 항상 컴포넌트 안에서 사용
  // useLocation은 Link를 통해 가져온 state만 인식
  // Link를 통해 오지 않으면 값이 없거나 이전값을 계속 가지고 있을 수도 있다

  const location = useLocation();
  // location을 통해 값을 가져와서 state에 넣어줌
  const state = location.state;

  return (
    <div>
      <p>{state}</p>
      <p>{location.state}</p>
    </div>
  );
};

export default LocationState;
