# K-LEAP: Korean Language Evaluation and Analysis Program

K-LEAP(한국어 능력 평가 및 분석 프로그램)은 한국어 능력 시험 결과를 분석하고 맞춤형 리포트를 생성하는 시스템입니다. 이 프로젝트는 데이터 분석 모듈과 리포트 생성 모듈에 중점을 둡니다.

## 프로젝트 범위

본 프로젝트는 다음 두 가지 핵심 모듈에 초점을 맞춥니다:

1. **데이터 분석 모듈**
2. **리포트 생성 모듈**

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
  - 교육자/강사용 리포트
  - 교육기관 관리자용 리포트
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
