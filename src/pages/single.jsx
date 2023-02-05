import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/loader";

const Single = () => {
  const { id } = useParams();
  const [singleData, setSingleData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getSingleData = async () => {
      const res = await fetch("https://dummyjson.com/products/" + id);
      const data = await res.json();
      setSingleData(data);
      setLoading(false);
    };
    getSingleData();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container">
      <h2>{singleData.title}</h2>
      <p>{singleData.description}</p>
      <div>
        {" "}
        {singleData?.images?.map((image, i) => (
          <img width={300} height={300} key={i} src={image} alt="" />
        ))}
      </div>
      <p>{singleData.price}$</p>
      <p>rating:{singleData.rating}</p>
    </div>
  );
};

export default Single;

