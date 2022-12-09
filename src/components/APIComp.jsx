// 데이터 API를 통해서 값을 뉴스 데이터를 가져오는 컴포넌트
// 데이터 API의 특징 :
// 데이터를 가져오기 위해 Ajax를 사용하여 '비동기'로 가져와서 사용 (http객체, fetchAPI, axios)

import { useEffect } from "react";
import { useState } from "react";

const APIComp = () => {
  // news를 저장할 공간 만들기
  const [news, setNews] = useState();

  // api의 내용이 많을 시 그 값이 빨리 전달이 되지 않을 때가 있음
  // 그 값이 왔을 때 제어하기 위한 state
  // 로딩이 끝났는지 아닌지 알수 있기 위해 boolean 값을 줌
  const [newsloading, setNewsloading] = useState(false);

  useEffect(() => {
    // 시작하자마자 값을 들고오기 위해 useEffect에 작성
    // 비동기함수로 작성하기위해 async / 기다려야할 함수로 await 사용
    const getData = async () => {
      // fetch("api주소") 작성
      // fetch는 주소를 통해서 값을 가져오기 때문에 시간이 걸리므로 await를 써서 기다렸다가 값을 들고 옴
      // await를 쓰지 않으면 Promise데이터로 들고오게 된다
      // Promise는 값을 가져오겠다고 약속한 데이터 형식
      // => then, await를 이용하여 값을 가져와서 사용
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=apple&from=2022-12-05&to=2022-12-05&sortBy=popularity&apiKey=c4c09dd0ba45435cb60e93cd10259c2a"
      );

      console.log(response);
      // 자료는 대부분 json형태로 받음
      const body = await response.json();
      console.log(body);
      setNews(body);
      // useState에 들어가는 값이 클 때, 바로 반영이 되지 않는 경우가 있다
      console.log(news);

      // 그 값이 들어올 때까지 기다림
      if (!news) {
        setNewsloading(true);
        console.log("내용이 들어왔습니다");
      }
    };
    getData();
  }, [newsloading]);

  return (
    <div>
      <h1>API컴포넌트</h1>
      {/* 주의할 점 : 리액트는 객체 형식을 바로 출력할 수 없다. 오류 뜸 */}
      {/*
       ** 리액트는 undefined에서 값을 찾을 수 없다
       ** 값이 들어오기 전에는 undefined가 들어가있다
       ** ex) 값이 들어가있지 않을 때 속성에서 값을 찾아오려고 함
       ** >> 삼항 연산자를 사용해서 값이 있을 때만 접근할 수 있게 함
       */}
      {/* news의 값이 undefined일 때는 "값이 아직 오지 않았습니다", 값이 왔을 때는 news의 status 값이 출력되게끔 */}
      {news == undefined ? "값이 아직 오지 않았습니다" : news.status}
      {/** 실습 : articles의 0번째 인덱스의 title출력 **/}
      {/* article은 배열이기 때문에 대괄호 써줌 */}
      <h3>{news ? news.articles[0].title : "값이 아직 오지 않았습니다"}</h3>
      {/*
       ** 1.현재 가져오는 데이터가 배열!
       ** 2.배열 안에 요소가 객체인지, 문자열인지 확인 후 출력
       */}
      {
        // 값이 없을 때, 출력하지않도록 삼항 연산자,
        // && 값이 있을 때만 출력할 수 있도록 코드 작성
        // 의미 : news와 news의 여러개의 배열 articles의 각 타이틀을 리스트로 출력한다
        news && news.articles.map((article) => <li>{article.title}</li>)
      }
      <APIBox title="제목" />
      <hr />
      {news && news.articles.map((article) => <APIBox title={article.title} urlToImage={article.urlToImage} author={article.author} />)}
    </div>
  );
};

export default APIComp;

const APIBox = (props) => {
  // props의 값은 객체로 들어오기 때문에,
  // 객체 기호로 감싸서 구조화할당 사용 / 배열은 배열기호로 감싸서
  const { title, urlToImage, author } = props;
  return (
    <div>
      <h3>{title}</h3>

      {/* 실습 */}
      {/** 이미지가 없을때 img 태그가 출력되지 않게 작성 */}
      {urlToImage ? (
        <img src={urlToImage} alt="사진" width="300px" />
      ) : (
        <div style={{ width: "300px", height: "300px", backgroundColor: "lightblue", display: "inline-block" }}></div>
      )}

      {/* 작가 출력하기 */}
      <h1>{author}</h1>
    </div>
  );
};
