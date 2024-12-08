import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import Animate from "~/components/ui/custom/Animate";
import BeeSection from "~/components/ui/custom/BeeSection";
import EmpowerSection from "~/components/ui/custom/EmpowerSection";
import Footer from "~/components/ui/custom/Footer";
import GalleryView from "~/components/ui/custom/GalleryView";
import Header from "~/components/ui/custom/Header";
import IconView from "~/components/ui/custom/IconsView";
import WaitlistView from "~/components/ui/custom/WaitlistView";
import WhyInvestSectipon from "~/components/ui/custom/WhyInvestSectipon";

export const meta: MetaFunction = () => {
  return [
    { title: "OneHive Africa" },
    { name: "description", content: "Hivemanager" },
  ];
};

export default function Index() {
  return (
    <div className="bg-white h-fit items-center w-screen grid">
      <Header />
      <BeeSection />
      <EmpowerSection />
      <WhyInvestSectipon />
      <Animate />
      <GalleryView />
      <IconView />
      <WaitlistView />
      <Footer />
    </div>
  );
}
