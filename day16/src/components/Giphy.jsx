import { useEffect, useState } from "react";
import axios from "axios";

export default function Giphy() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: import.meta.env.VITE_SOME_KEY,
        },
      });
      console.log(results);
      setData(results.data.data);
    };
    fetchData();
  }, []);

  const renderGifs = () => {
    return data.map((el) => {
      return (
        <div className="w-full flex" key={el.id}>
          <img className="w-full mt-4" src={el.images.fixed_height.url} />
        </div>
      );
    });
  };

  return <div className="">{renderGifs()}</div>;
}
