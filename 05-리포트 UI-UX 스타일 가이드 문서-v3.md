# K-LEAP  리포트 UI/UX 스타일 가이드 (최종판)

## 목차

1. [문서 정보](#1-문서-정보)
2. [개요](#2-개요)
3. [브랜딩](#3-브랜딩)
4. [타이포그래피](#4-타이포그래피)
5. [컬러 팔레트](#5-컬러-팔레트)
6. [레이아웃 및 그리드 시스템](#6-레이아웃-및-그리드-시스템)
7. [컴포넌트](#7-컴포넌트)
8. [데이터 시각화](#8-데이터-시각화)
9. [아이콘 및 이미지](#9-아이콘-및-이미지)
10. [애니메이션 및 전환](#10-애니메이션-및-전환)
11. [반응형 디자인](#11-반응형-디자인)
12. [접근성](#12-접근성)
13. [HTML 템플릿](#13-html-템플릿)
14. [CSS 스타일](#14-css-스타일)
15. [JavaScript 및 차트 구현](#15-javascript-및-차트-구현)

---

## 1. 문서 정보

- **문서 제목**: K-LEAP  리포트 UI/UX 스타일 가이드
- **버전**: 6.0
- **최종 업데이트**: 2024-09-12
- **작성자**: [작성자 이름]
- **승인자**: [승인자 이름]

---

## 2. 개요

본 스타일 가이드는 K-LEAP  리포트의 일관된 사용자 경험을 보장하기 위한 종합적인 지침을 제공합니다. 학습자, 교수자, 학부모를 위한 효과적인 데이터 시각화와 직관적인 인터페이스 설계를 목표로 합니다.

---

## 3. 브랜딩

### 3.1 로고 사용

- **위치**: 좌측 상단 고정
- **크기**: 높이 40px (너비 자동 조정)
- **최소 여백**: 상하좌우 10px
- **사용 제한**: 로고 변형 금지, 항상 원본 파일 사용

### 3.2 브랜드 컬러

- **Primary Color**: #4A90E2 (세련된 파란색)
- **Secondary Color**: #50E3C2 (밝은 청록색, 보조 색상)
- **Accent Color**: #F5A623 (따뜻한 주황색, 강조 색상)
- **Neutral Color**: #F0F4F8 (밝은 회색, 배경 색상)
- **Text Primary Color**: #333333 (어두운 회색, 본문 텍스트)
- **Text Secondary Color**: #666666 (중간 회색, 서브 텍스트)
- **Success Color**: #7ED321 (초록색, 성공 메시지)
- **Warning Color**: #F8E71C (노란색, 경고 메시지)
- **Danger Color**: #D0021B (빨간색, 오류 메시지)

### 3.3 브랜드 톤앤보이스

- **신뢰성**: 정확하고 검증된 정보 제공
- **친근함**: 사용자 친화적인 언어 사용
- **전문성**: 교육 분야의 전문 지식을 바탕으로 한 내용 전달

---

## 4. 타이포그래피

### 4.1 폰트 설정

- **한글 폰트**: "Noto Sans KR"
  - URL: https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap
- **영어 폰트**: "Inter"
  - URL: https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap

#### 폰트 우선순위 설정
- 한글과 영어를 구분하여 각 언어에 맞는 폰트가 우선 적용되도록 설정:
  ```css
  font-family: "Noto Sans KR", "Inter", sans-serif;
  ```

### 4.2 제목

- H1 (페이지 제목):
  - 크기: 28px (데스크톱), 24px (모바일)
  - 색상: #1a1a1a
  - 폰트 두께: 700
  - 마진 하단: 24px
- H2 (섹션 제목):
  - 크기: 24px (데스크톱), 20px (모바일)
  - 색상: #333333
  - 폰트 두께: 700
  - 마진 하단: 16px
- H3 (서브섹션 제목):
  - 크기: 20px
  - 색상: #333333
  - 폰트 두께: 500
  - 마진 하단: 12px

### 4.3 본문 텍스트

- 크기: 16px
- 색상: #333333 (--text-color)
- 줄 높이: 1.6

---

## 5. 컬러 팔레트

### 5.1 주요 컬러

- **Primary**: #4A90E2
- **Secondary**: #50E3C2
- **Accent**: #F5A623

### 5.2 의미별 컬러

- **Success**: #7ED321
- **Warning**: #F8E71C
- **Danger**: #D0021B

### 5.3 중립 컬러

- **Background**: #F0F4F8
- **Text**: #333333
- **Border**: #E5E5E5
- **Disabled**: #CCCCCC

---

## 6. 레이아웃 및 그리드 시스템

### 6.1 전체 레이아웃

- **최대 너비**: 1200px
- **마진**: 자동 (중앙 정렬)
- **배경색**: 흰색
- **테두리 반경**: 8px
- **그림자**: 0 2px 4px rgba(0, 0, 0, 0.1)
- **패딩**: 40px (데스크톱), 20px (모바일)

### 6.2 그리드 시스템

- 12컬럼 그리드 시스템
- 거터 폭: 24px (데스크톱), 16px (태블릿/모바일)

---

## 7. 컴포넌트

### 7.1 버튼

- **배경색**: var(--primary-color)
- **텍스트 색상**: #ffffff
- **테두리 반경**: 4px
- **폰트 두께**: 500
- **호버 효과**: 배경색 #003d7a

### 7.2 입력 필드

- **배경색**: 흰색
- **테두리**: 1px solid #E5E5E5
- **포커스 시 테두리 색상**: #4A90E2
- **폰트 크기**: 16px

### 7.3 체크박스 및 라디오 버튼

- **크기**: 20px x 20px
- **선택 시 색상**: #4A90E2

---

## 8. 데이터 시각화

### 8.1 차트 라이브러리

- **Chart.js** (버전 3.7.0)

### 8.2 차트 설정

- 반응형: true
- **색상**:
  - **Primary**: #4A90E2
  - **Secondary**: #50E3C2
  - **Accent**: #F5A623

---

## 9. 아이콘 및 이미지

### 9.1 아이콘 시스템

K-LEAP  리포트 UI/UX에서는 **Google Material Icons**를 사용하여 아이콘을 제공하고 있습니다. 아이콘은 직관적이고 시각적으로 명확하게 전달될 수 있는 요소로, 다음과 같은 기준을 따릅니다.

### 9.2 Google Material Icons

- **아이콘 패키지**: Google Material Icons
- **URL**: https://fonts.googleapis.com/icon?family=Material+Icons

### 9.3 아이콘 사용법

**Google Material Icons**는 HTML 내에서 쉽게 사용할 수 있으며, `<span>` 또는 `<i>` 태그에 `material-icons` 클래스를 추가하여 적용할 수 있습니다.

#### 아이콘 사용 예시

```html
<span class="material-icons">check_circle</span> 70% 완료
```

### 9.4 아이콘 크기 및 색상

아이콘 크기와 색상은 아래와 같은 CSS 스타일로 관리합니다.

#### 아이콘 스타일

```css
/* 아이콘 크기 및 색상 */
.material-icons {
  font-size: 24px;  /* 기본 크기 */
  vertical-align: middle;
  color: var(--primary-color);  /* 기본 색상 */
}

.material-icons.small {
  font-size: 18px;  /* 작은 아이콘 */
}

.material-icons.large {
  font-size: 36px;  /* 큰 아이콘 */
}

.material-icons.secondary {
  color: var(--secondary-color);  /* 보조 색상 적용 */
}
```

#### 다양한 아이콘 크기 및 색상 적용 예시

```html
<span class="material-icons small">check_circle</span> 50% 완료
<span class="material-icons large secondary">error</span> 오류 발생
```

### 9.5 아이콘 적용 시 주의사항

- **적절한 크기 사용**: 아이콘의 크기를 상황에 맞게 조정하여 가독성과 일관성을 유지합니다.
- **색상 적용**: 상황에 맞는 색상을 사용하여 사용자에게 명확한 의미를 전달합니다.
  - 성공적인 작업에는 `success-color`, 오류 메시지에는 `danger-color` 등 의미에 맞는 색상을 사용합니다.
- **아이콘과 텍스트의 간격**: 아이콘과 텍스트 사이에 충분한 간격을 두어 가독성을 높입니다.

---

## 10. 애니메이션 및 전환

- **지속 시간**: 200-300ms
- **이징 함수**: ease-in-out
- **버튼 호버 효과**: 배경색 변경 (100ms)

---

## 11. 반응형 디자인

- **모바일**: < 768px
- **태블릿**: 768px - 1024px


- **데스크톱**: > 1024px

---

## 12. 접근성

- **색상 대비**: 최소 4.5:1 (WCAG 2.1 AA 기준)
- **키보드 내비게이션**: 모든 인터랙티브 요소에 포커스 제공
- **ARIA 레이블 및 역할** 적절히 사용

---

## 13. 부록

### 13.1 공통 CSS 스타일

다음은 리포트에서 자주 사용되는 공통 CSS 스타일의 예시입니다. **루트 컬러 변수**와 **폰트**를 설정하고, 각종 UI 요소(버튼, 입력 필드, 표 등)에 대해 스타일을 세부적으로 정의하였습니다.

#### 루트 컬러 및 폰트 설정
```css
:root {
  --primary-color: #4A90E2;     /* 주 색상 */
  --secondary-color: #50E3C2;   /* 보조 색상 */
  --accent-color: #F5A623;      /* 강조 색상 */
  --neutral-color: #F0F4F8;     /* 배경색, 중립 색상 */
  --text-primary-color: #333333; /* 본문 텍스트 색상 */
  --text-secondary-color: #666666; /* 보조 텍스트 색상 */
  --success-color: #7ED321;     /* 성공 메시지 색상 */
  --warning-color: #F8E71C;     /* 경고 메시지 색상 */
  --danger-color: #D0021B;      /* 오류 메시지 색상 */
}

/* 전체 페이지 기본 설정 */
body {
  font-family: "Noto Sans KR", "Inter", sans-serif;
  color: var(--text-primary-color);
  line-height: 1.6;
  margin: 0;
  padding: 0;
  background-color: var(--neutral-color);
}
```

#### 헤더와 리포트 레이아웃
```css
/* 리포트 컨테이너 */
.report-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* 헤더 스타일 */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--neutral-color);
  padding: 20px;
  border-bottom: 2px solid var(--primary-color);
}

.header .report-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--primary-color);
}

.header .report-info {
  font-size: 16px;
  color: var(--text-secondary-color);
}
```

### 13.2 공통 버튼 스타일

버튼 스타일은 통일된 디자인을 사용하여 시각적 일관성을 유지합니다.

```css
/* 버튼 스타일 */
.button {
  background-color: var(--primary-color);
  color: #ffffff;
  padding: 12px 24px;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}

.button:hover {
  background-color: #357ae8;
}

.button-secondary {
  background-color: var(--secondary-color);
}

.button-secondary:hover {
  background-color: #3ec1ab;
}
```

### 13.3 입력 필드와 폼 스타일

입력 필드, 체크박스, 라디오 버튼 등 사용자 입력 요소를 정의한 CSS 스타일입니다.

```css
/* 입력 필드 스타일 */
.input-field {
  width: 100%;
  padding: 12px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  font-size: 16px;
}

.input-field:focus {
  border-color: var(--primary-color);
  outline: none;
}

/* 체크박스 및 라디오 버튼 스타일 */
.input-checkbox,
.input-radio {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background-color: #ffffff;
  border: 2px solid #e5e5e5;
}

.input-checkbox:checked,
.input-radio:checked {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}
```

### 13.4 표 스타일

표는 학습 성취도, 결과 요약 등에 사용됩니다. 명확하게 데이터를 표현할 수 있도록 스타일이 적용됩니다.

```css
/* 표 스타일 */
.table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.table th, .table td {
  border: 1px solid #e5e5e5;
  padding: 12px;
  text-align: center;
}

.table th {
  background-color: var(--neutral-color);
  font-weight: 600;
  color: var(--text-secondary-color);
}

.table td {
  font-weight: 400;
  color: var(--text-primary-color);
}
```

### 13.5 차트 스타일

**Chart.js**를 사용한 차트 스타일입니다. 주로 학습 진행 상태, 성취도 등의 시각화를 지원합니다.

```css
/* 차트 컨테이너 */
.chart-container {
  margin-top: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* 차트 캔버스 */
.chart {
  width: 100%;
  height: 300px;
}
```

### 13.6 반응형 레이아웃

화면 크기에 따라 레이아웃을 조정하기 위한 반응형 스타일입니다. 모바일, 태블릿, 데스크톱 크기에 맞게 그리드 시스템을 조정할 수 있습니다.

```css
/* 반응형 레이아웃 */
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

/* 모바일 레이아웃 */
@media (max-width: 767px) {
  .container {
    grid-template-columns: 1fr;
  }
}

/* 태블릿 레이아웃 */
@media (min-width: 768px) and (max-width: 1023px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 데스크톱 레이아웃 */
@media (min-width: 1024px) {
  .container {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### 13.7 애니메이션 및 전환

CSS 애니메이션을 사용해 사용자 인터페이스 전환이 부드럽게 보이도록 설정합니다.

```css
/* 기본 애니메이션 */
.fade-in {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* 버튼 호버 애니메이션 */
.button {
  transition: background-color 0.3s ease-in-out;
}
```

### 13.8 아이콘 사용법

**Google Material Icons**를 사용해 UI 요소에 아이콘을 추가합니다.

```css
/* 아이콘 스타일 */
.material-icons {
  font-size: 20px;
  vertical-align: middle;
  color: var(--primary-color);
}
```

아이콘을 사용하는 HTML 코드 예시:
```html
<span class="material-icons">check_circle</span> 70% 완료
```

### 13.9 접근성 고려

접근성에 대한 세부적인 스타일을 정의합니다. 색상 대비, 키보드 내비게이션, 폼 접근성을 향상시킵니다.

```css
/* 포커스 스타일 */
:focus {
  outline: 3px solid var(--primary-color);
  outline-offset: 2px;
}

/* 폼 레이블 연결 */
.label {
  font-size: 14px;
  color: var

(--text-secondary-color);
  margin-bottom: 4px;
  display: block;
}

.input-field:focus + .label {
  color: var(--primary-color);
}
```

### 13.10 Google Material Icons 사용법

**Google Material Icons**는 리포트 UI/UX에서 필수적인 시각적 요소로, 다양한 사용 사례와 함께 적용할 수 있습니다.

#### Google Material Icons 불러오기

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

#### 아이콘 사용 예시

```html
<span class="material-icons">home</span> 홈으로 이동
```

### 13.11 아이콘 크기 및 색상 설정

아이콘의 크기와 색상은 **CSS**를 통해 일관성 있게 관리할 수 있으며, 디자인 가이드라인에 맞춰 각 상황에 맞는 스타일을 적용할 수 있습니다.

#### CSS 아이콘 스타일

```css
/* 기본 아이콘 스타일 */
.material-icons {
  font-size: 24px;
  vertical-align: middle;
  color: var(--primary-color);
}

/* 작은 아이콘 */
.material-icons.small {
  font-size: 18px;
}

/* 큰 아이콘 */
.material-icons.large {
  font-size: 36px;
}

/* 보조 색상 적용 */
.material-icons.secondary {
  color: var(--secondary-color);
}

/* 경고 색상 적용 */
.material-icons.warning {
  color: var(--warning-color);
}

/* 오류 색상 적용 */
.material-icons.danger {
  color: var(--danger-color);
}
```

#### 다양한 상황에서의 아이콘 스타일 적용 예시

- **성공 메시지**: 성공적으로 완료된 작업에 `success-color`를 적용합니다.
- **경고 메시지**: 경고 상태에 `warning-color`를 적용합니다.
- **오류 메시지**: 오류 발생 시 `danger-color`를 적용하여 사용자에게 명확하게 전달합니다.

```html
<!-- 성공 아이콘 -->
<span class="material-icons success">check_circle</span> 작업 완료

<!-- 경고 아이콘 -->
<span class="material-icons warning">warning</span> 경고: 진행 불가

<!-- 오류 아이콘 -->
<span class="material-icons danger">error</span> 오류 발생
```

---

# K-LEAP  리포트 UI/UX 스타일 가이드 (업데이트)

## 목차

1. [문서 정보](#1-문서-정보)
2. [개요](#2-개요)
3. [브랜딩](#3-브랜딩)
4. [타이포그래피](#4-타이포그래피)
5. [컬러 팔레트](#5-컬러-팔레트)
6. [레이아웃 및 그리드 시스템](#6-레이아웃-및-그리드-시스템)
7. [컴포넌트](#7-컴포넌트)
8. [데이터 시각화](#8-데이터-시각화)
9. [아이콘 및 이미지](#9-아이콘-및-이미지)
10. [애니메이션 및 전환](#10-애니메이션-및-전환)
11. [반응형 디자인](#11-반응형-디자인)
12. [접근성](#12-접근성)
13. [HTML 템플릿](#13-html-템플릿)
14. [CSS 스타일](#14-css-스타일)
15. [JavaScript 및 차트 구현](#15-javascript-및-차트-구현)

---

## 1. 문서 정보

- **문서 제목**: K-LEAP  리포트 UI/UX 스타일 가이드
- **버전**: 7.0
- **최종 업데이트**: 2024-09-13
- **작성자**: [작성자 이름]
- **승인자**: [승인자 이름]

---

## 2. 개요

본 스타일 가이드는 K-LEAP  리포트의 일관된 사용자 경험을 보장하기 위한 종합적인 지침을 제공합니다. 이 가이드는 모든 K-LEAP  리포트에 적용될 HTML 템플릿과 CSS 스타일을 포함하며, 학습자, 교수자, 학부모를 위한 효과적인 데이터 시각화와 직관적인 인터페이스 설계를 목표로 합니다.

---

## 3~12. (기존 내용 유지)

---

## 13. HTML 템플릿

K-LEAP  리포트의 기본 HTML 구조는 다음과 같습니다:

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>리포트</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <link rel="stylesheet" href="./styles-v2.css" />
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://d3js.org/d3.v6.min.js"></script>
</head>
<body>
    <div class="container">
        <header>
            <div class="header-container">
                <div class="report-title">리포트 제목</div>
                <div class="report-info">
                    <span class="material-icons">person</span> <!-- [학생 이름] | [과목] 학습 경로 | 목표 완료일: [날짜] -->
                </div>
            </div>
        </header>

        <main>
            <!-- 섹션 구조 반복 -->
            <section>
                <div class="head">
                    <h2>[섹션 제목]</h2>
                </div>
                <div class="body">
                    <div class="card">
                        <div class="head">
                            <h3>[카드 제목]</h3>
                        </div>
                        <div class="body">
                            <!-- 카드 내용 -->
                        </div>
                        <div class="tail"></div>
                    </div>
                </div>
            </section>
            <!-- 추가 섹션들 -->
        </main>

        <footer>
            <p>학습 리포트 제공 © 2024 K-LEAP </p>
        </footer>
    </div>

    <script>
        // JavaScript 코드
    </script>
</body>
</html>
```

---

## 14. CSS 스타일

K-LEAP  리포트의 기본 CSS 스타일은 다음과 같습니다:

```css
:root {
  --primary-color: #4a90e2;
  --secondary-color: #50e3c2;
  --accent-color: #f5a623;
  --neutral-color: #f0f4f8;
  --text-primary-color: #333333;
  --text-secondary-color: #666666;
  --success-color: #7ed321;
  --warning-color: #f8e71c;
  --danger-color: #d0021b;
}

body {
  font-family: "Noto Sans KR", "Inter", sans-serif;
  color: var(--text-primary-color);
  background-color: var(--neutral-color);
  line-height: 1.6;
  margin: 0;
  padding: 0;
  font-size: 16px;
}

.container {
  max-width: 1200px;
  min-width: 320px;
  margin: 40px auto;
  padding: 20px 40px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* 추가 CSS 스타일 */
```

---

## 15. JavaScript 및 차트 구현

K-LEAP  리포트의 차트와 데이터 시각화는 Chart.js와 D3.js를 사용하여 구현합니다. 기본 구현 예시는 다음과 같습니다:

```javascript
document.addEventListener("DOMContentLoaded", function () {
    // Chart.js를 사용한 차트 구현
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // D3.js를 사용한 차트 구현
    const data = [
        {name: "A", value: 20},
        {name: "B", value: 50},
        {name: "C", value: 30}
    ];

    const svg = d3.select("#myD3Chart")
        .append("svg")
        .attr("width", 300)
        .attr("height", 200);

    svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * 70)
        .attr("y", d => 200 - d.value)
        .attr("width", 65)
        .attr("height", d => d.value)
        .attr("fill", "blue");
});
```

이 JavaScript 코드는 차트 생성의 기본 예시를 제공합니다. 실제 구현 시에는 리포트의 특정 요구사항에 맞게 수정해야 합니다.

---
