import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Board = () => {
  const [boardlist, setBoardlist] = useState([1, 2, 3, 4, 5]);

  return (
    <div>
      <h1>Board 페이지</h1>
      {/* /board/'여기적히는 값' 이 BoardPage에 params으로 전달된다*/}
      <Link to="/board/1">페이지 1로 이동합니다</Link>
      {/* 값이 여러개일 경우 배열을 가져와 map으로 출력 */}
      <hr />

      <p>board리스트</p>
      {boardlist.map((boardid) => (
        // 삼항연산자로 선택한 보드리스트 숫자만 색깔 바꾸기
        // NavLink에 isActive 값을 화살표 함수로 가져와서 사용함
        <NavLink style={({ isActive }) => (isActive ? { color: "blue" } : { color: "black" })} to={`/board/${boardid}`}>
          {boardid}
        </NavLink>
      ))}

      <Outlet outletname="아울렛" />
    </div>
  );
};

export default Board;
