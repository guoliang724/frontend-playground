import React from "react";
import { Routes, Route } from "react-router";
import File from "../File";
import ReduxTest from "../ReduxTest";
import styles from "./1.less";

export default function Body() {
  return (
    <div>
      <Routes>
        <Route path="/file" element={<File />} />
        <Route path="/redux" element={<ReduxTest />} />
        <Route></Route>
      </Routes>
    </div>
  );
}
