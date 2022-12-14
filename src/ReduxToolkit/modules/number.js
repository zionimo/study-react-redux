// createSlice를 이용해 리듀서함수와 액션함수를 간단하게 만들 수 있다
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  num: 1,
};

// 리듀서함수
const numberSlice = createSlice({
  name: "number",
  initialState: initialState,
  reducers: {
    // 증가하는 값을 만드는 reducer
    // 함수이름 : 화살표함수
    increase: (state) => {
      // 함수안에 state값을 직접 접근하여 바꿀 수 있음
      // redux에서 직접 접근하지 못할 때는 값이 한번에 바뀌는 것을 막기 위해서 ...스프레드 연산자를 사용했음
      // toolkit 사용하면 직접 접근해서 바꿀 수 있다
      // num에 직접 접근해서 1씩 증가시키기
      state.num += 1;
    },
    decrease: (state) => {
      state.num -= 1;
    },

    setNum: (state, action) => {
      //  값을 외부에서 들고오거나 바꾸고 싶을 때, (state,action)을 써주고 action.payload를 통해서 가져옴
      state.num = action.payload;
    },
  },
});

// 사용할 액션함수 내보내기 - numberSlice에서 가져옴
export const { increase, decrease, setNum } = numberSlice.actions;
// 사용할 리듀서 내보내기 - numberSlice에서 가져옴
export default numberSlice.reducer;
