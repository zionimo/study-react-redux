import "./App.css";
import StateBox from "./components/StateBox";
import PropsParent from "./components/PropsParent";
import TestState from "./components/TestState";
import EventBox from "./components/EventBox";
import TestEvent from "./components/TestEvent";
import EventOBJ from "./components/EventOBJ";
import Hook from "./components/Hook";
import APIComp from "./components/APIComp";
import TestAPI from "./components/TestAPI";
import RootIndex from "./page/RootIndex";
import TestRootIndex from "./page/TestRootIndex";
import StoreIndex from "./Redux/StoreIndex";
import ReduxToolkitIndex from "./ReduxToolkit/ReduxToolkitIndex";

// App안에 원하는 내용을 바로 작성할 수 있지만
// 각 내용을 컴포넌트로 만들어서 화면에 출력을 하고 있다
// 빈 컴포넌트를 먼저 만들고 App으로 불러와서 화면보고 작성
function App() {
  // fuction App 안에서는 자바스크립트의 내용을 자유롭게 쓸수 있다

  // return은 렌더될 html의 내용+ {}를 통해서 자바스크립트 함께 사용
  // return 안에서 실행순서는 위에서 아래로 실행이 된다
  // *오류가 났을 때 전체가 출력이 되지 않는다

  // return 안에 원하는 컴포넌트를 넣어서 확인하면서 공부하시면됩니다

  return (
    <div className="App">
      <ReduxToolkitIndex />
    </div>
  );
}

export default App;
