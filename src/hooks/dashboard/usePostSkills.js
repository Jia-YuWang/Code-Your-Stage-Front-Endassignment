import axios from "axios";
import { useCookies } from "react-cookie";
import { skills } from "../../data/mockData";

const headers={
  'access-control-allow-origin': 'https://api.projectszero.tech', 
  //'connection': 'keep-SpeechRecognitionAlternative', 
  //'content-length': '42', 
  'content-type': 'application/json', 
  //'date': 'Tue12 Sep 2023 03:25:09 GMT', 
  //'server': 'nginx/1.18.0 (Ubuntu)' ,
  'vary': 'Origin' 

};


const usePostSkills = () => {
  const [, setCookie] = useCookies(["studentId"]);
  return async (studentId, skills) => {
    try {
      
      await axios.post(`https://api.projectszero.tech/skills/${studentId}`, 
       skills,{header:headers})
       
      setCookie("studentId", studentId);
      console.log(studentId, skills);
      alert("送出成功");
    } catch (error) {
      alert(error);
    }
  };
};

//console.log(skills);
export default usePostSkills;