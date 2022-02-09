import React, { useState, useRef } from "react";
import "./index.css";

export default function Yuansheng() {
  const [srcs, setSrcs] = useState([""]);
  const imgsRef = useRef();
  const imgs = srcs.map((item, index) => (
    <img alt="" key={index} src={item}></img>
  ));
  console.log("srcs-----", srcs);

  const handleChange = () => {
    const files = imgsRef.current.files;
    const _files = [];
    for (const item of files) {
      const file = transferToBase64(item);
      console.log("file====>", file);
      _files.push(file);
    }
    console.log("------_files", _files);
    setSrcs(_files);
  };

  const transferToBase64 = (file) => {
    return URL.createObjectURL(file);
  };

  return (
    <div className="yuansheng">
      {srcs.length <= 6 && (
        <form action="/" method="post" encType="multipart/form-data">
          <input type="file" multiple onChange={handleChange} ref={imgsRef} />
          <button type="submit">提交</button>
        </form>
      )}

      {imgs}
    </div>
  );
}
