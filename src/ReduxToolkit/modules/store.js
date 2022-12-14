// toolkit을 사용해서 store 구성
import { configureStore } from "@reduxjs/toolkit";
// 작성한 슬라이스를 추가함 -export defalt로 전달한 값은 원하는 이름으로 바꿔서 전달 가능
// export로만 전달한 값은 이름 못바꿈
import numberReducer from "./number";
import bookReducer from "./bookToolkit";

// 작성하는 리듀서는 configureStore 안에 적어 연결함
// index 파일에서 사용할 수 있도록 export로 내보내줌
export default configureStore({
  reducer: {
    number: numberReducer,
    book: bookReducer,
  },
});
