import { createSlice } from "@reduxjs/toolkit";

// 초기값 설정
const initialState = {
  title: "제목이 없습니다",
  pay: 5000,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    // 액션함수 만들기
    // 외부의 값을 받을 것이므로 action.payload
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setPay: (state, action) => {
      state.pay = action.payload;
    },
  },
});

// 리듀서와 액션함수 내보내기
export default bookSlice.reducer;
export const { setTitle, setPay } = bookSlice.actions;
