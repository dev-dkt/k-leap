주어진 "한국어능력시한국어능력시험 개인 능력 프로파일" 코드를 df_questions, df_responses, df_questions_speaking ,df_responses_speaking,speaking_grading_criteria 데이타를 참조하여 정보 및 시각화 데이타를 적용해주세요.

---

"시험 정보 함수 (TIF) 관련 측정"문서의 "한국어능력시험 정보 함수 분석 및 효율성 평가 보고서" 코드를 df_questions, df_responses, df_questions_speaking ,df_responses_speaking,speaking_grading_criteria 데이타를 참조하여 정보 및 시각화 데이타를 적용해주세요.

---

"문항 뱅크 통계"문서의 "한국어능력시험 문항 활용도 분석 및 개발 가이드"를 df_questions, df_responses, df_questions_speaking ,df_responses_speaking,speaking_grading_criteria 데이타를 참조하여 html코드를 생성해주세요.
필요한 데이타는 목적에 맞게 생성하고,생성할 html전체 구조는 아래 html을 참조해주세요.
```
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>리포트 제목</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="report-styles.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/11.8.0/math.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://d3js.org/d3.v7.min.js"></script> 
    <script
      id="MathJax-script"
      async
      src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
    ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"></script>    
    <script src="https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/echarts-gl/dist/echarts-gl.min.js"></script>
  </head>
  <body>
    <div class="container">
      <h1>리포트 제목</h1>

      <div class="section">

      </div>
    </div>

    <footer>
      <p>
        본 프로파일은 2024년 9월 기준으로 작성되었습니다. 향후 시험 정책 변경에
        따라 내용이 수정될 수 있습니다.
      </p>
    </footer>
    <script type="module">
      import {
        df_questions,
        df_responses,
        df_questions_speaking,
        df_responses_speaking,
        speaking_grading_criteria,
      } from "./data2.js";

    </script>

  </body>
</html>

```
```
      import {
      df_questions as _df_questions,
      df_responses,
      df_questions_speaking as _df_questions_speaking,
      df_responses_speaking,
      speaking_grading_criteria,
      } from "./data2.js";

      const df_questions = _df_questions.map((q) => {
        q.난이도 = parseFloat(q.난이도);
        q.변별도 = parseFloat(q.변별도);
        return q;
      });
      const df_questions_speaking = _df_questions_speaking.map((q) => {
        q.난이도 = parseFloat(q.난이도);
        q.변별도 = parseFloat(q.변별도);
        return q;
      });
```