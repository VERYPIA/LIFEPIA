
📘 관상 · 손금 분석 웹사이트 배포 가이드

1️⃣ 준비물
- GitHub 계정
- OpenAI 계정 + API 키
- Vercel 계정 (무료 호스팅 서비스)

2️⃣ 코드 업로드
- GitHub에 로그인 후 새 저장소 생성
- 제공받은 zip 파일을 압축 해제 후 전체 파일 업로드
- 반드시 파일 구조를 유지하세요 (pages, components 등)

3️⃣ Vercel 배포
- vercel.com 접속 → GitHub 연동
- 저장소 선택 → 'Import' 클릭
- 환경변수 추가:
  - OPENAI_API_KEY = (당신의 키)

4️⃣ 실행 결과
- 웹사이트가 자동 생성됨 (예: https://yourname.vercel.app)
- 모바일에서도 바로 사용 가능
- 사진 업로드 → AI 분석 → 점신 스타일 리포트 표시

5️⃣ 도움말
- GPT Vision 분석을 위해 업로드 이미지는 얼굴 또는 손바닥 위주로 구성
- 리포트는 자동으로 JSON으로 변환되어 웹페이지에 표시됩니다
