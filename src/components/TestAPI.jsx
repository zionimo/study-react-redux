import { useState } from "react";

const TestAPI = () => {
  const [news, setNews] = useState();
  // api양이 많아 로딩에 시간이 많이 소요될 때 비동기를 사용함
  // 동기: 실행순서에 따라 위에서 아래로 실행. 첫번째가 실행되어야 두번째 실행됨
  // 비동기: 첫번째가 실행되지 않아도 따로 스택을 빼서 다음 단계 실행함
  const getData = async (country) => {
    const url =
      "https://newsapi.org/v2/top-headlines/sources?" + "category=business&" + "country=" + country + "&apiKey=c4c09dd0ba45435cb60e93cd10259c2a";
    // 위의 주소를 이용하여 버튼을 누를 때마다
    // 다른 나라의 값을 받아올 수 있도록 작성하세요

    // fetch를 쓰면 시간이 걸리므로 awit를 써서 기다렸다가 받게함
    const respone = await fetch(url);
    const body = await respone.json();
    console.log(body);
    setNews(body);
  };

  return (
    <div>
      <h1>뉴스 API 확인</h1>
      <p>버튼을 누를 때 관련 나라의 기사 가져오기</p>
      {/* 필요한 값을 전달하여 url의 내용을 채울수 있게 작성하세요 */}
      <button
        onClick={() => {
          getData("us");
        }}
      >
        us
      </button>
      <button
        onClick={() => {
          getData("fr");
        }}
      >
        fr
      </button>
      <button
        onClick={() => {
          getData("kr");
        }}
      >
        kr
      </button>

      {/** 아래에 map을 이용하여 기사를 출력하세요 */}
      {news && news.sources.map((source) => <li>{source.description}</li>)}

      <hr />

      {/* 값이 들어왔지만 배열에 값이 없을 경우 */}
      {/* 삼항연산자 안에 또 삼항연산자가 들어갈 수 있다 */}
      {news && news.sources.length > 0 ? news.sources.map((source) => <li>{source.description}</li>) : "검색 결과가 없습니다"}
    </div>
  );
};

export default TestAPI;
