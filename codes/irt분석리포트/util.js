// 배열 index를 기준으로 df_responses와 df_ability 데이터를 합치는 함수
function mergeDataByIndex(df_responses, df_ability) {
    // 두 배열의 길이가 같다고 가정하고 index를 기준으로 병합
    const mergedData = df_responses.map((response, index) => {
      const ability = df_ability[index];
  
      // 이름이 같을 경우에만 데이터를 병합
      if (response.이름 === ability.이름) {
        return {
          ...response,
          "능력 추정치 (theta)": ability["능력 추정치 (theta)"],
        };
      } else {
        return response; // 이름이 다르면 기존 response 데이터 반환
      }
    });
  
    return mergedData;
  }
  
  // 두 데이터셋을 병합 실행
  const combinedData = mergeDataByIndex(df_responses, df_ability);
  
  // 병합된 데이터 확인
  console.log(combinedData);


  // 배열 index를 기준으로 df_responses와 df_ability 데이터를 합치는 함수
function mergeDataByIndex(df_responses, df_ability) {
    // 두 배열의 길이가 같다고 가정하고 index를 기준으로 병합
    const mergedData = df_responses.map((response, index) => {
      const ability = df_ability[index];
  
      // 이름이 같을 경우에만 데이터를 병합
      if (response.이름 === ability.이름) {
        return {
          ...response,
          "능력 추정치 (theta)": ability["능력 추정치 (theta)"],
        };
      } else {
        return response; // 이름이 다르면 기존 response 데이터 반환
      }
    });
  
    return mergedData;
  }
  
  // 두 데이터셋을 병합 실행
  const combinedData2 = mergeDataByIndex(df_responses, df_ability);
  
  // 병합된 데이터 확인
  console.log(combinedData);