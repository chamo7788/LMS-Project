import React from "react";
import {
  Navbar
} from "../components";
import { Homepage } from "../components/home/Homepage";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Homepage/>
    </div>
  );
}
