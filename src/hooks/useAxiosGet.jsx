import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosGet = (url, params) => {
  const [fetchedData, setFetchedData] = useState(null);
  // https://api.open5e.com/manifest/

  useEffect(() => {
    axios
      .get(`${url}${params}`)
      .then((res) => {
        console.log(res.data);
        setFetchedData((d) => res.data);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  }, []);

  return { fetchedData };
};

export default useAxiosGet;
