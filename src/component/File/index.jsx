import React from "react";
import { Divider } from "antd";
import styles from "./index.css";
import MayiUpoload from "./component/MayiUpload";
import Yuansheng from "./component/Yuansheng";
import ReactTest from "./component/ReactTest";
export default function File() {
  console.log("styles", styles);
  return (
    <div className={styles.file}>
      <Divider orientation="left">AntD</Divider>
      <MayiUpoload />
      <Divider orientation="left">原生</Divider>
      <Yuansheng />
      <Divider orientation="left">react-test</Divider>
      <ReactTest />
    </div>
  );
}
