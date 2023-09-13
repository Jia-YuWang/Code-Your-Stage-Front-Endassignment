/*import axios from "axios";
import { useCookies } from "react-cookie";

const usePostSkills = () => {
  const [, setCookie] = useCookies(["studentId"]);
  return async (studentId, skills) => {
    try {
      await axios.post(`https://api.projectszero.tech/skills/${studentId}`, {
        skill: skills,
        thisIsDefinitelyWrong: true
      });
      setCookie("studentId", studentId);
      alert("送出成功");
    } catch (error) {
      alert(error);
    }
  };
};

export default usePostSkills;*/


import axios from "axios";
import { useCookies } from "react-cookie";

const usePostSkills = () => {
  const [, setCookie] = useCookies(["studentId"]);
  return async (studentId, skills) => {
    try {
      // Validate the studentId here if needed.

      const response = await axios.post(`https://api.projectszero.tech/skills/${studentId}`, {
        skill: skills,
      });

      if (response.status === 200 && response.data.message === "Skills updated successfully") {
        setCookie("studentId", studentId);
        message("Skills updated successfully");
      } else {
        alert("Skills updated failed");
      }
    } catch (error) {
      console.error("Error:", error);

      if (error.response && error.response.status === 400) {
        // Handle 400 Bad Request response
        alert("Invalid Input: " + error.response.data.error);
      } else {
        // Handle other errors
        alert("技能更新失敗");
      }
    }
  };
};

export default usePostSkills;
