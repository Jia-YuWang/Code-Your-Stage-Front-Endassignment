import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from "chart.js";
import { Radar } from "react-chartjs-2";

import useSkills from "../../hooks/dashboard/useSkills.js";
// Import utilities
import { useCookies } from "react-cookie";
import { tailwindConfig } from "../../utils/Utils";
//import { skills } from "../../data/mockData";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

function Skills() {
  const [cookies] = useCookies(["studentId"]);
  const { studentId } = cookies;
  // const studentId = "B11000000";
  const labels=[
    
      "UIUX",
      "backend",
      "business analysis",
      "design thinking",
      "frontend"
  
  ];

  // useSkills(); 
  console.log(studentId);
  //const { labels, values } = useSkills(studentId);
  const chartData = {
    labels,
    datasets: [
      {
        label: "能力值",
        data: studentId?useSkills(studentId).values:[0,0,0,0,0],
        backgroundColor: tailwindConfig().theme.colors.orange[500],
        borderColor: tailwindConfig().theme.colors.orange[500],
        borderWidth: 2
      }
    ]
  };
//console.log(studentId);這裡studentId值沒有下來
  return (
    <div className="flex flex-col col-span-12 sm:col-span-6 bg-white  shadow-lg border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b dark:border-slate-700 border-slate-100">
        <h2 className=" font-semibold text-slate-800 dark:text-slate-100 
">
          Skills
        </h2>
      </header>
      {/* {studentId ? (
        <div className="flex align-center flex-col px-28 bg-white">
          <div className="text-center my-4">學號：{studentId}</div>
          <Radar data={chartData} />
        </div>
      ) : (
        <div className="pt-20 text-center">尚未輸入數值，請先送出右方表單</div>
      )} */}
      <div className="flex align-center flex-col px-28 bg-white">
        <div className="text-center my-4">學號：{studentId}</div>
        <Radar data={chartData} />
      </div>
    </div>
  );
}

export default Skills;