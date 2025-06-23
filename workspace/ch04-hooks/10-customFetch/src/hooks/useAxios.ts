import axios from "axios";
import { useEffect, useState } from "react";

// API 서버 엔드포인트 주소 상수 정의
const API_SERVER = "https://fesp-api.koyeb.app/todo";
axios.defaults.baseURL = API_SERVER;
axios.defaults.timeout = 5000; //지정된 시간동안 응답을 받지 못하면 에러를 방생시킨다.

// fetch 함수 호출시 필요한 파라미터 타입 정의
interface FetchParams {
  url: string;
}

function useAxios<T>(fetchParams: FetchParams) {
  // 서버랑 통신할때는 항상 이 세가지는 깔고 가야한다. 데이터, 에러, 로딩 상태
  // 서버와 통신하는 이런작업은 공통 함수로 저장하는게 좋다.
  // Todo 목록을 저장할 상태 (초기값: null)
  const [data, setData] = useState<T | null>(null);

  // 에러 메시지를 저장할 상태 (초기값: null)
  const [error, setError] = useState<Error | null>(null);

  // 로딩 상태를 저장할 상태 (초기값: false)
  const [isLoading, setIsLoading] = useState(false);

  // 컴포넌트가 마운트될 때 Todo 목록을 가져오기
  useEffect(() => {
    // 1초 지연을 주어 API 호출 (로딩 상태 테스트를 위해)
    requestFetch(fetchParams);
  }, []); // 빈 배열을 전달하여 마운트시 한번만 실행되도록 설정  // Todo API 서버에 데이터를 요청하는 비동기 함수
  const requestFetch = async (params: FetchParams) => {
    console.log("axios로 요청한다.", params);
    try {
      // 로딩 상태를 true로 설정
      setIsLoading(true);

      // fetch API를 사용하여 서버에 GET 요청
      const res = await axios.get<T>(params.url);
      console.log("파싱된 데이터:", res.data);
      //fetch는 에러처리를 따로 해줘야하는데 axios는 알아서 응답 상태코드로 해줌
      setData(res.data);
    } catch (err) {
      // 네트워크 오류 등 예외 발생시 처리
      console.error("에러 발생:", err);
      setError(err as Error);
      setData(null);
    } finally {
      // 성공/실패 여부와 관계없이 로딩 상태를 false로 설정
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    data,
  };
}

export default useAxios;
