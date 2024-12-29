import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import BeeHow from "~/components/ui/custom/beekeeper/BeeHow";
import BeeJoin from "~/components/ui/custom/beekeeper/BeeJoin";
import BeeWhy from "~/components/ui/custom/beekeeper/BeeWhy";
import Empower from "~/components/ui/custom/beekeeper/Empower";
import Footer from "~/components/ui/custom/Footer";
import Header from "~/components/ui/custom/Header";
import JoinUS from "~/components/ui/custom/invest/JoinUS";

export const meta: MetaFunction = () => {
  return [
    { title: "OneHive Africa" },
    { name: "description", content: "Hivemanager" },
  ];
};

export default function Beekeeper() {
  return (
    <div className="bg-white h-fit items-center w-screen grid">
      <Header />
      <div className="z-0">
        <Empower />
        <BeeWhy />
        <BeeHow />
        <BeeJoin />
      </div>
      <Footer />
    </div>
  );
}
