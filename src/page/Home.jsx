import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      {/* a태그는 이동할 때마다 새로고침 되고, 데이터가 날아가기 때문에 Link사용 권장
       * 만약 사용한다면 클릭이벤트를 이용해 새로고침을 막아야 한다 */}

      <Link to="/about">About 이동</Link>
      <hr />
      <Link to="/board">Board 이동</Link>
    </div>
  );
};

export default Home;
