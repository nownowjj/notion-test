import 'server-only';
// @ts-ignore
import { Client } from '@notionhq/client';
import { HospitalContent } from '@/.next/types/notion';


export const getHospitalData = async (): Promise<HospitalContent[]> => {
  // 서버에서만 읽을 수 있는 환경 변수
  const token = process.env.NOTION_TOKEN;
  const dbId = process.env.NOTION_DATABASE_ID;

  if (!token || !dbId) {
    console.error("❌ 서버 환경 변수를 찾을 수 없습니다.");
    throw new Error("환경 변수 설정 오류");
  }

  // 인스턴스 생성 시점에 확실히 Client 클래스인지 체크
  const notion = new Client({ auth: token });

  // 브라우저 실행 방지용 최종 체크
  if (typeof window !== 'undefined') {
    throw new Error("❌ 이 함수는 브라우저에서 실행될 수 없습니다.");
  }

  try {
    // notion.databases.query가 존재하는지 런타임 체크
    const queryMethod = notion.databases?.query;
    
    if (typeof queryMethod !== 'function') {
      // 만약 여전히 함수가 아니라면, 객체 구조를 출력해서 원인 파악
      console.log("Notion Object Keys:", Object.keys(notion));
      throw new Error("노션 SDK 메서드 로드 실패");
    }

    const response = await notion.databases.query({
      database_id: dbId,
    });

    // ... 파싱 로직 동일
  } catch (e) {
    console.error(e);
    throw e;
  }
};