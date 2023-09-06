import useSWRFetch from "../useSWRFetch";

const useApplicationStats = () => {
  const { data } = useSWRFetch(
    //應該是以下網址目前無法連上
    "https://api.projectszero.tech/getApplicationStats"
  );
  const transformDate = (dateStr) => {
    const parts = dateStr.split("/");
    return `${parts[1]}-${parts[2]}-${parts[0]}`;
  };
  return {
    labels: data?.map((each) => transformDate(each.date)),
    values: data?.map((each) => each.amount)
  };
};

export default useApplicationStats;
