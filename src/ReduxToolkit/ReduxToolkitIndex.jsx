// 리액트에서 리덕스를 사용하기 위해 프로바이더를 가져옴
import { Provider } from "react-redux";
import BookBookToolkit from "./BookBookToolkit";
// 리덕스를 사용할 때는 createstore를 통해서 store를 생성
// 리덕스 툴킷을 사용하면 store.js파일에서 store을 내보내서 가져옴
// store.js 작성한 이후에 추가
import store from "./modules/store";

import NumberBox from "./NumberBox";

const ReduxToolkitIndex = () => {
  return (
    <div>
      <Provider store={store}>
        <BookBookToolkit />
      </Provider>
    </div>
  );
};

export default ReduxToolkitIndex;
