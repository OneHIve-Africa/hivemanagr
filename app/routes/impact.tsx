import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import Footer from "~/components/ui/custom/Footer";
import Header from "~/components/ui/custom/Header";
import impact from "~/assets/impact.png";

export const meta: MetaFunction = () => {
  return [
    { title: "OneHive Africa" },
    { name: "description", content: "Hivemanager" },
  ];
};

export default function Impact() {
  return (
    <div className="bg-white h-fit items-center w-screen grid">
      <Header />
      <div className="z-0 bg-oha__green w-full flex justify-center items-center py-32">
        <img src={impact} alt="impact img" className=" mt-20" />
      </div>
      <Footer />
    </div>
  );
}
