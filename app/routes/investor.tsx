import type { MetaFunction } from "@remix-run/node";
import Footer from "~/components/ui/custom/Footer";
import Header from "~/components/ui/custom/Header";
import HeroSection from "~/components/ui/custom/invest/HeroSection";
import HowItWorks from "~/components/ui/custom/invest/HowItWorks";
import JoinUS from "~/components/ui/custom/invest/JoinUS";
import LowInvestment from "~/components/ui/custom/invest/LowInvestment";
import ReadyInvest from "~/components/ui/custom/invest/ReadyInvest";
import { InvestorTest } from "~/components/ui/custom/InvestorTest";

export const meta: MetaFunction = () => {
  return [
    { title: "OneHive Africa" },
    { name: "description", content: "Hivemanager" },
  ];
};

export default function Investor() {
  return (
    <div className="bg-white h-fit items-center w-screen grid">
      <Header />
      <div className="z-0">
        <HeroSection />
        <LowInvestment />
        <JoinUS />
        <HowItWorks />
        <ReadyInvest />
      </div>
      <Footer />
    </div>

    // <>
    //   {/* <InvestorTest /> */}
    // </>
  );
}
