import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTitle, setPay } from "./modules/bookToolkit";

const BookBookToolkit = () => {
  // title의 state값 설정
  const [input, setInput] = useState("");
  // pay의 state값 설정
  const [changePay, setChangePay] = useState();

  // useSelector로 초기값 불러오기
  const book = useSelector((state) => state.book);
  // useDispatch로 값 수정하기
  const dispatch = useDispatch();

  return (
    <div>
      <h3>리덕스 툴킷 내용 출력화면</h3>
      <h3>
        책제목 : {book.title}, 금액 : {book.pay}
        <br />
        <input
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch(setTitle(input));
          }}
        >
          제목 수정
        </button>
        <br />
        <input
          type="text"
          onChange={(e) => {
            setChangePay(e.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch(setPay(changePay));
          }}
        >
          값 수정
        </button>
      </h3>
    </div>
  );
};

export default BookBookToolkit;
