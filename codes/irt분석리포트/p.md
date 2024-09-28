주어진 "한국어능력시험 결과 기반 교육 프로그램 개선 가이드" 코드를 df_questions, df_responses, df_questions_speaking ,df_responses_speaking,speaking_grading_criteria 데이타를 참조하여 정보 및 시각화 데이타를 적용해주세요.

"추정된 능력 점수의 분포 특성"문서의 "한국어능력시험 결과 기반 교육 프로그램 개선 가이드"를 df_questions, df_responses, df_questions_speaking ,df_responses_speaking,speaking_grading_criteria 데이타를 참조하여 html코드를 생성해주세요.
생성할 html전체 구조는 아래 html을 참조해주세요.

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
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://d3js.org/d3.v7.min.js"></script>
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
