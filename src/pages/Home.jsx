import React from "react";
import {Navbar} from "../components";
import { Homepage } from "../components/home/HomePage/Homepage";
import {Footer} from "../components/home/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Homepage/>
      <Footer/>
    </div>
  );
}
