import React, { useState } from "react";
import axios from "axios";

export const Component = () => {
  const [resData, setResData] = useState(null);
  const [address, setAddress] = useState("");

  const handleClickAddress = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${address}`
      );

      setResData(
        res.data.results[0].address1 +
          res.data.results[0].address2 +
          res.data.results[0].address3
      );
    } catch (e) {
      alert("エラーが発生しました！");
    }
  };

  return (
    <>
      <div>
        <h1>郵便番号</h1>
        <input
          placeholder="(例)0000000"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <button onClick={handleClickAddress}>住所検索</button>
        <p> {resData}</p>
      </div>
    </>
  );
};
