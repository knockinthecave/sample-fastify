# 🚀 Fastify API 프로젝트

Fastify를 사용하여 개발된 간단한 REST API 프로젝트입니다. TypeScript 기반으로 작성되었으며, Prettier와 ESLint를 적용하여 코드 스타일을 유지합니다.

## 📌 프로젝트 구조
```
/sample-fastify
 ├── /routes          # 라우트 관리
 │    ├── hello.routes.ts
 │    ├── user.routes.ts
 ├── /controllers     # 컨트롤러 관리
 │    ├── hello.controller.ts
 │    ├── user.controller.ts
 ├── /schemas         # API 요청/응답 스키마 관리 (TypeBox 사용)
 │    ├── hello.schema.ts
 │    ├── user.schema.ts
 ├── /services        # 비즈니스 로직 처리
 │    ├── user.service.ts
 ├── app.ts           # Fastify 서버 엔트리 포인트
 ├── package.json     # 프로젝트 설정 파일
 ├── tsconfig.json    # TypeScript 설정 파일
 ├── .eslintrc.js     # ESLint 설정 파일
 ├── .prettierrc      # Prettier 설정 파일
 ├── .prettierignore  # Prettier 무시 파일
 ├── README.md        # 프로젝트 소개 및 API 명세
```

## 📦 설치 및 실행
### 1️⃣ 패키지 설치
```sh
npm install
```

### 2️⃣ 개발 모드 실행 (`ts-node` 사용)
```sh
npm run dev
```
> `ts-node`를 사용하여 TypeScript 코드를 컴파일 없이 실행합니다.

### 3️⃣ 빌드 후 실행 (`tsc` → `node dist/app.js`)
```sh
npm run build
npm start
```
> `npm run build`로 TypeScript 코드를 `dist/` 폴더에 컴파일한 후, `npm start`로 실행합니다.

📌 **`package.json`의 스크립트 설정 예시**:
```json
"scripts": {
  "dev": "ts-node app.ts",
  "build": "tsc",
  "start": "node dist/app.js"
}
```

## 📡 API 명세
### **1. `GET /hello`**
- **설명**: `name`을 포함한 쿼리 스트링을 전달하면 인사 메시지를 반환합니다.
- **요청 예시**:
```sh
curl "http://localhost:3000/hello?name=Seongbeom"
```
- **응답 예시**:
```json
{
  "message": "Hello, Seongbeom"
}
```

### **2. `POST /users`**
- **설명**: 새로운 사용자를 생성합니다.
- **요청 예시**:
```sh
curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"name": "Kim", "email": "kim@example.com"}'
```
- **응답 예시**:
```json
{
  "id": 1,
  "name": "Kim",
  "email": "kim@example.com"
}
```

### **3. `GET /users`**
- **설명**: 등록된 모든 사용자 목록을 반환합니다.
- **요청 예시**:
```sh
curl -X GET http://localhost:3000/users
```
- **응답 예시**:
```json
[
  { "id": 1, "name": "Alice", "email": "alice@example.com" },
  { "id": 2, "name": "Bob", "email": "bob@example.com" }
]
```

## 📜 라이선스
MIT License를 따릅니다.

