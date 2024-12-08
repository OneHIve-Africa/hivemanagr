import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import Footer from "~/components/ui/custom/Footer";
import Header from "~/components/ui/custom/Header";

export const meta: MetaFunction = () => {
  return [
    { title: "OneHive Africa" },
    { name: "description", content: "Hivemanager" },
  ];
};

export default function Partner() {
  return (
    <div className="bg-white flex h-screen justify-center">
      <Header />

      <Footer />
    </div>
  );
}
