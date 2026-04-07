// app/api/hospital/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { Client } = require('@notionhq/client');
    const token = process.env.NOTION_TOKEN;
    const databaseId = process.env.NOTION_DATABASE_ID;

    if (!token || !databaseId) {
      return NextResponse.json([]);
    }

    const notion = new Client({ auth: token });

    // 1. [해결책] databases.query 대신 search 메서드를 사용합니다.
    // filter를 통해 특정 데이터베이스 내부의 'page'들만 가져옵니다.
    const response = await notion.search({
      filter: {
        value: 'page',
        property: 'object'
      },
      sort: {
        direction: 'descending',
        timestamp: 'last_edited_time'
      }
    });

    // 2. 검색 결과 중 우리가 원하는 Database에 속한 페이지들만 필터링
    const results = response.results.filter((page: any) => {
      // 상위 객체(parent)가 우리가 찾는 database_id인지 확인
      return page.parent?.database_id?.replace(/-/g, '') === databaseId.replace(/-/g, '');
    });

    const data = results.map((page: any) => {
      const props = page.properties;
      console.log(JSON.stringify(props))
      
      const imageFiles = props['이미지']?.files || [];
      const imageUrls = imageFiles.map((file: any) => {
        return file.type === 'file' ? file.file.url : file.external?.url;
      });

      return {
        id: page.id,
        name: props['이름']?.title?.[0]?.plain_text || '이름 없음',
        description: props['설명']?.rich_text?.[0]?.plain_text || '',
        imageUrl: imageUrls,
        index: page.properties['index'].rich_text[0]?.plain_text || "0"
      };
    });

    return NextResponse.json(data);
  } catch (error: any) {
    console.error("❌ Search API Error:", error.message);
    return NextResponse.json([]); // 항상 배열을 반환하여 프론트엔드 map 에러 방지
  }
}