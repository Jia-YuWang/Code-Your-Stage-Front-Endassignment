import useSWRFetch from "../useSWRFetch";

const useSkills = (studentId) => {
  // finish it by yourself
  const {studentId,skills} = useSWRFetch("https://api.projectszero.tech/skills/${studentId");

};

export default useSkills;


// objective: finsih "post" api 