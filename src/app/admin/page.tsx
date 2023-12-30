"use client";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Tables from "../../components/tables";

const Admin = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-slate-500">
      <Tables />
    </div>
  );
};

export default Admin;
