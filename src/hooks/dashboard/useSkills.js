import useSWRFetch from "../useSWRFetch";

const useSkills = (studentId) => {
  // finish it by yourself
  const {data} = useSWRFetch(`https://api.projectszero.tech/skills/${studentId}`);
  return {
    labels:  [
      "UIUX",
      "backend",
      "business analysis",
      "design thinking",
      "frontend"
    ],
    values: data?Object.values(data):[0,0,0,0,0]
  };

};

export default useSkills;


// objective: finsih "post" api 
// 你模仿useGradeStats.js