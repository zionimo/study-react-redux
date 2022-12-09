import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      {/* Outlet : tRoute를 중첩해서 사용할 때 그 안에 들어간 컴포넌트를 화면에 출력하기 위해 사용 */}
      {/* about 안에 들어갔어도 그 안에 주소로 들어가지 않으면 화면에 출력되지 않는다 */}
      {/* Outlet공간에 AboutTest, AboutMain 출력하기 */}
      <Link to="/about/test">About Test로 이동</Link> <br />
      <Link to="/about/main">About Main으로 이동</Link>
      <Outlet />
    </div>
  );
};

export default About;
