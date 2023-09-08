import useSWRFetch from "../useSWRFetch";

const useAcademystats = () => {
  
  const { data } = useSWRFetch("https://api.projectszero.tech/getAcademyStats");
  
function newdata(data){
    const 理學院= 
    data["心理所一般組"] + data["數學系"] + data["物理學系"] + data["心理學系"];
  const 工學院=
    data["材料科學與工程學系"] + data["工程科學及海洋工程學系"];
  const 商管學院=
    data["經濟學系"] + data["工商管理學系 科技管理組"] + data["工商管理學系"] + data["會計學系"] + data["國際企業學系"] + data["經濟系"];
  const 文法學院=
    data["科際整合法律學研究所"] + data["戲劇學系,外國語文學系 / 圖書資訊學系"] + data["歷史學系"] + data["外國語文學系/社會學系"];
  const 創新學院=
    data["創新領域學士學位學程"];

  const 電資學院=
    data["電機工程學系"] + data["生物機電工程學系"] + data["資訊管理學系"] + data["資訊工程學系"] + data["生醫電資所"] + data["資訊工程研究所"];
  const 醫學院=
    data["物理治療學系"] + data["醫學工程學系"];
  
  
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
  const result = newdata(data);
  

  
  return {
    labels: result && Object.keys(result),
    values: result && Object.values(result)
  };
}


export default useAcademystats;
