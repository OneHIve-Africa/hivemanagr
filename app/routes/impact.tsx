import { Button } from "~/components/ui/button";
import Footer from "~/components/ui/custom/Footer";
import Header from "~/components/ui/custom/Header";
import impact from "~/assets/impact.png";
import { useEffect, useState } from "react";

export const meta = () => {
  return [
    { title: "OneHive Africa" },
    { name: "description", content: "Hivemanager" },
  ];
};

export default function Impact() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Animate the message after a short delay to give the "coming soon" feel
    setTimeout(() => {
      setShowMessage(true);
    }, 500); // Adjust time delay as needed
  }, []);

  return (
    <div className="bg-white h-fit items-center w-screen grid">
      <Header />
      <div className="z-0 bg-oha__green w-full flex justify-center items-center py-32">
        <img
          src={impact}
          alt="impact img"
          className="mt-20 animate__animated animate__fadeIn animate__delay-1s"
        />
      </div>

      <div
        className={`flex flex-col justify-center items-center py-10 ${
          showMessage
            ? "animate__animated animate__fadeInUp animate__delay-2s"
            : ""
        }`}
      >
        <h2 className="text-3xl font-semibold text-center mb-4">
          Impact Stories Coming Soon!
        </h2>
        <p className="text-lg text-center mb-6">
          We're working hard to bring you inspiring stories of positive change.
          Stay tuned for updates!
        </p>
        <Button className="bg-oha__green text-white rounded-md shadow font-semibold text-lg px-10 py-6">
          Stay Updated
        </Button>
      </div>

      <Footer />
    </div>
  );
}
