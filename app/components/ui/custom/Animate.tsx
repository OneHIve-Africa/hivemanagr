import React, { useEffect, useRef } from "react";
import investImage from "~/assets/invest.png";
import { Button } from "../button";
type Props = {
  className?: string;
};

const Animate: React.FC<Props> = ({ className }) => {
  return (
    <div className="uid h-screen w-full px-10 md:px-[198px] flex flex-col py-28">
      <h1>Lorem Ipsum</h1>

      <div>
        {/* card 1 */}
        <div className="flex justify-between bg-oha__yellow">
          <div></div>
          <div>
            <img
              src={investImage}
              alt="invest"
              className="w-40 h-52"
            />
          </div>
        </div>

        {/* card 2 */}
        <div className="bg-[#151414] h-20 w-full rounded-lg"></div>

        {/* card 3 */}
        <div className="bg-oha__green h-20 w-full rounded-lg"></div>
      </div>
    </div>
  );
};

export default Animate;
