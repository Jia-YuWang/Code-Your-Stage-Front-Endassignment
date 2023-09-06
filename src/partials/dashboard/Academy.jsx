import DoughnutChart from "../../charts/DoughnutChart";
//import { academyStats } from "../../data/mockData";//mock data

 import useAcademystats from "../../hooks/dashboard/useAcademystats";

function Academy() {
  
  // const { labels, values } = useAcademystats(); //mock data
  const {labels, values} = useAcademystats();
  /*
  // 生成隨機色碼的函式
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "";
    for (let i = 0; i < 6; i += 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
  }; 
  */

  const collegeColors=[
          "#930eab",
          "#91608e",
          "#a0b567",
          "#8a3e85",
          "#ab0a98",
          "#664d4b",
  ];
  
  const chartData = {
    labels,
    datasets: [
      {
        label: "Distribution of colleges",
        data: values,
        backgroundColor:collegeColors,
        borderWidth: 0
      }
    ]
  };
  

  return (
    <div className="flex flex-col col-span-full bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b dark:border-slate-700 border-slate-100">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Distribution of colleges
        </h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      {labels && <DoughnutChart data={chartData} width={389} height={260} />}
    </div>
  );
}

export default Academy;
