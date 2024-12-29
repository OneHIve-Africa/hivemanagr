import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import Footer from "~/components/ui/custom/Footer";
import Header from "~/components/ui/custom/Header";
import ReadyInvest from "~/components/ui/custom/invest/ReadyInvest";
import PartnerHero from "~/components/ui/custom/partner/PartnerHero";
import PartnerRole from "~/components/ui/custom/partner/PartnerRole";
import PartnerStories from "~/components/ui/custom/partner/PartnerStories";
import PartnerWhy from "~/components/ui/custom/partner/PartnerWhy";

export const meta: MetaFunction = () => {
  return [
    { title: "OneHive Africa" },
    { name: "description", content: "Hivemanager" },
  ];
};

export default function Partner() {
  return (
    <div className="bg-white h-fit items-center w-screen grid">
      <Header />
      <div className="z-0">
        <PartnerHero />
        <PartnerWhy />
        <PartnerStories />
        <PartnerRole />
        <ReadyInvest />
      </div>
      <Footer />
    </div>
  );
}
