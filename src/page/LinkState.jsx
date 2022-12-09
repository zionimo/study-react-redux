import { Link, useLocation } from "react-router-dom";

// Link를 통해서 State에 값을 담아 전달하려 함
// 이 값은 useLocation을 통해 값을 가져올 수 있다

const LinkState = () => {
  const varInput = "작성한 값입니다";

  return (
    <div>
      <h3>Link를 이용해서 값을 전달하기</h3>
      <p>
        LinkState의 path는 /link,
        <br /> LocationStatedml path는 /location
      </p>
      <Link to="/location" state={"값 전달"}>
        LocationState로 문자열 이동
      </Link>

      <br />
      <Link to="/location" state={varInput}>
        LocationState로 변수 이동
      </Link>

      <br />
      <Link to="/query?name=aa">쿼리스트링을 가지고 이동</Link>
    </div>
  );
};

export default LinkState;
