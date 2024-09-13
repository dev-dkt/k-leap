# K-LEAP: Korean Language Evaluation and Analysis Program

## 프로젝트 목적 및 개요

K-LEAP(한국어 능력 평가 및 분석 프로그램)은 국가에서 위탁한 기관이 실시하는 한국어 능력 시험의 결과를 분석하고, 다양한 이해관계자들을 위한 맞춤형 리포트를 생성하는 시스템입니다.

### 시험 개요
- **대상**: 취업, 유학, 기타 목적의 외국인
- **시험 구성**: 
  1. 선택형 필기시험
  2. 말하기 시험
- **평가 방식**: 
  - 필기시험: 선택형 문항
  - 말하기 시험: 루브릭 기반 평가 (채점자가 미리 정해진 루브릭 항목별로 점수 부여)

### 프로젝트 목적
1. **데이터 분석**: 필기시험과 말하기 시험 결과에 대한 종합적이고 심층적인 분석 수행
2. **맞춤형 리포트 생성**: 수험자, 평가자, 시험 개발자, 정책 입안자, 연구자 등 다양한 이해관계자를 위한 특화된 리포트 제공
3. **시험 품질 향상**: 분석 결과를 바탕으로 시험의 신뢰도와 타당도 개선을 위한 인사이트 제공
4. **정책 지원**: 한국어 능력 평가와 관련된 정책 결정을 위한 데이터 기반 분석 제공
5. **연구 지원**: 한국어 능력 평가 및 외국어로서의 한국어 습득에 관한 학술 연구 촉진

이 프로젝트는 데이터 분석 모듈과 리포트 생성 모듈에 초점을 맞추어, 한국어 능력 시험의 결과를 다각도로 분석하고 이를 통해 얻은 인사이트를 다양한 이해관계자들에게 효과적으로 전달하는 것을 목표로 합니다.

## 주요 기능

### 데이터 분석 모듈
- 필기시험 (선택형) 결과 분석
- 말하기 시험 (루브릭 기반) 결과 분석
- 통계적 분석 (기술통계, 추론통계)
- 시계열 분석 (응시자 성적 추이)
- 상관관계 분석 (예: 필기-말하기 능력 상관관계)

### 리포트 생성 모듈
- 사용자 유형별 맞춤형 리포트 생성:
  - 수험자용 리포트
  - 평가자용 리포트
  - 시험 개발자용 리포트
  - 정책 입안자용 리포트
  - 연구자용 리포트
- 데이터 시각화 (그래프, 차트 등)
- PDF, HTML 등 다양한 형식의 리포트 출력

## 기술 스택

- 프로그래밍 언어: Python
- 데이터 분석: Pandas, NumPy, SciPy
- 데이터 시각화: Matplotlib, Seaborn
- 리포트 생성: ReportLab (PDF), Jinja2 (HTML)
- 버전 관리: Git

## 설치 및 사용 방법

1. 저장소 클론:
   ```
   git clone https://github.com/yourusername/K-LEAP.git
   cd K-LEAP
   ```

2. 가상 환경 생성 및 활성화:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. 의존성 설치:
   ```
   pip install -r requirements.txt
   ```

4. 설정 파일 생성:
   ```
   cp config.example.yml config.yml
   # config.yml 파일을 열어 필요한 설정을 수정하세요.
   ```

5. 실행:
   ```
   python main.py
   ```

## 기여 방법

K-LEAP 프로젝트에 기여하고 싶으신 분들은 다음 과정을 따라주세요:

1. 이 저장소를 포크(Fork)합니다.
2. 새로운 기능 브랜치를 생성합니다 (`git checkout -b feature/AmazingFeature`).
3. 변경 사항을 커밋합니다 (`git commit -m 'Add some AmazingFeature'`).
4. 브랜치에 푸시합니다 (`git push origin feature/AmazingFeature`).
5. Pull Request를 생성합니다.

## 라이선스

이 프로젝트는 [MIT 라이선스](https://choosealicense.com/licenses/mit/)에 따라 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 연락처

프로젝트 관리자 - [이메일 주소]

프로젝트 링크: [https://github.com/yourusername/K-LEAP](https://github.com/yourusername/K-LEAP)