import React, { useEffect, useState } from "react";

const Github = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/devmalya99")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setdata(res);
      });
  }, []);
  return (
    <div className="text-center m-4 bg-gray-500 text-3xl">
      Github followers:{data.followers}
    </div>
  );
};

export default Github;
