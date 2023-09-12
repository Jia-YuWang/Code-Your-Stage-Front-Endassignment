import useSWRFetch from "../useSWRFetch";

function newdata(qwer){
  if (!qwer) {
    return {
      "理學院": 0,
      "工學院": 0,
      "商管學院": 0,
      "文法學院": 0,
      "創新學院": 0,
      "電資學院": 0,
      "醫學院": 0,
    };
  }

    const 理學院 = 
      (qwer["心理所一般組"] || 0) + (qwer["數學系"] || 0) + (qwer["物理學系"] || 0) + (qwer["心理學系"] || 0);
    const 工學院 =
      (qwer["材料科學與工程學系"] || 0) + (qwer["工程科學及海洋工程學系"] || 0);
    const 商管學院 =
      (qwer["經濟學系"] || 0) + (qwer["工商管理學系 科技管理組"] || 0) + (qwer["工商管理學系"] || 0) + (qwer["會計學系"] || 0) + (qwer["國際企業學系"] || 0) + (qwer["經濟系"] || 0);
    const 文法學院 =
      (qwer["科際整合法律學研究所"] || 0) + (qwer["戲劇學系"] || 0) + (qwer["外國語文學系 / 圖書資訊學系"] || 0) + (qwer["歷史學系"] || 0) + (qwer["外國語文學系/社會學系"] || 0);
    const 創新學院 =
      qwer["創新領域學士學位學程"] || 0;
  
    const 電資學院 =
      (qwer["電機工程學系"] || 0) + (qwer["生物機電工程學系"] || 0) + (qwer["資訊管理學系"] || 0) + (qwer["資訊工程學系"] || 0) + (qwer["生醫電資所"] || 0) + (qwer["資訊工程研究所"] || 0);
    const 醫學院 =
      (qwer["物理治療學系"] || 0) + (qwer["醫學工程學系"] || 0);
  
  
  const 學院計數 = {
      "理學院": 理學院,
      "工學院": 工學院,
      "商管學院": 商管學院,
      "文法學院": 文法學院,
      "創新學院": 創新學院,
      "電資學院": 電資學院,
      "醫學院": 醫學院,
    };
  
  return 學院計數;
};

const useAcademystats = () => {
  
  const { data } = useSWRFetch("https://api.projectszero.tech/getAcademyStats");
  let result;
  if (data) {
    result = newdata(data);
    console.log(result);
  }
  
  return {
    labels: result && Object.keys(result),
    values: result && Object.values(result)
  };
}


export default useAcademystats;
