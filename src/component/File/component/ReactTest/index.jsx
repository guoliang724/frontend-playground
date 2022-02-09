import React, { useState, useEffect, useRef } from "react";
import { Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./index.css";

export default function ReactTest() {
  const [imgList, setImgList] = useState([]);
  const uploadButton = <div></div>;
  return (
    <div className="reactTest">
      <Upload
        className="uploadPic"
        multiple
        listType="picture-card"
        maxCount={6}
      >
        <UploadOutlined />
        <div className="addPic">添加图片</div>
      </Upload>
    </div>
  );
}
