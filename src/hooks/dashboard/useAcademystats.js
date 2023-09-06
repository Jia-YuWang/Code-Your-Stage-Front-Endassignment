import useSWRFetch from "../useSWRFetch";

const useAcademystats = () => {
  //底下那個網址讓圈圈變成一堆系
  const { data } = useSWRFetch("https://api.projectszero.tech/getAcademyStats");
  return {
    labels: data && Object.keys(data),
    values: data && Object.values(data)
  };
};

export default useAcademystats;
