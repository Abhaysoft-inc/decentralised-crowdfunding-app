"use client"
import MainScreen from "@/components/MainScreen";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="mb-10">
        <div className="lg:mx-10 mx-5 mt-6">
          <Navbar />
        </div>

        <div className="main-area flex mt-6 lg:mx-10 mx-5 rounded gap-3">
          <div className="side bg-white w-[350px] rounded shadow px-2 py-2 h-fit hidden lg:block">
            <Sidebar />
          </div>
          <div className="main shadow bg-white px-2 py-2 w-full h-fit">
            <MainScreen />
          </div>
        </div>
      </div>


    </>
  );
}
