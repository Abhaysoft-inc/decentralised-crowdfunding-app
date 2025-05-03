"use client"
import MainScreen from "@/components/MainScreen";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="mx-10 mt-6">
        <Navbar />
      </div>

      <div className="main-area flex mt-6 mx-10 gap-3">
        <div className="side bg-white w-[350px] rounded shadow px-2 py-2 h-fit">
          <Sidebar />
        </div>
        <div className="main shadow bg-white px-2 py-2 w-full h-fit">
          <MainScreen />
        </div>
      </div>


    </>
  );
}
