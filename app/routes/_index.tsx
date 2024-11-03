import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import BeeSection from "~/components/ui/custom/BeeSection";
import EmpowerSection from "~/components/ui/custom/EmpowerSection";
import Header from "~/components/ui/custom/Header";

export const meta: MetaFunction = () => {
  return [
    { title: "OneHive Africa" },
    { name: "description", content: "Hivemanager" },
  ];
};

export default function Index() {
  return (
    <div className="bg-white flex flex-col h-screen items-center">
        <Header/>
        <BeeSection/>
        <EmpowerSection/>
    </div>
  );
}
