import React from "react";
import bio from "~/assets/biodiversity_11564211 1.png";
import knowledge from "~/assets/knowledge_9651858 1.png";
import research from "~/assets/research_11601525 1.png";
import rise from "~/assets/rise_15172493 1.png";
import stats from "~/assets/statistics_3533208 1.png";
import beeshow from "~/assets/beekeeper-show.png";

const BeeHow: React.FC = () => {
  return (
    <div className="px-5 md:px-10 lg:px-[198px] py-16 uid">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-start mt-4 mb-6 md:mt-6 md:mb-8">
        How It Works ...
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Content Section */}
        {/* can use auto here  */}
        <div className="relative lg:w-[515px] grid gap-5">
          {/* Section 1 */}
          <div className="relative grid items-start gap-4 mb-6">
            <div className="uid flex w-full items-center gap-5">
              <img className="w-12 h-12" alt="Idea" src={research} />
              <h3 className="text-xl md:text-2xl font-semibold">
                Register as a Farmer
              </h3>
            </div>
            <div className="flex w-full  gap-5">
              <div className="w-12 flex items-center justify-center">
                <div className="w-0.5 h-full bg-gray-300 ml-2"></div>
              </div>
              <p className="text-base md:text-lg text-gray-600 uid w-full">
                Sign up on our platform to start your journey as a One Hive
                Africa beekeeper. Provide your details and get matched with
                potential investors.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="relative grid items-start gap-4 mb-6">
            <div className="uid flex w-full items-center gap-5">
              <img className="w-12 h-12" alt="Money box" src={knowledge} />
              <h3 className="text-xl md:text-2xl font-semibold">
                Access Resources
              </h3>
            </div>
            <div className="flex w-full  gap-5">
              <div className="w-12 flex items-center justify-center">
                <div className="w-0.5 h-full bg-gray-300 ml-2"></div>
              </div>
              <p className="text-base md:text-lg text-gray-600 uid w-full">
                Dive into our extensive library of beekeeping resources, from
                beginner guides to advanced techniques, tailored to help you
                succeed.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="relative grid items-start gap-4 mb-6">
            <div className="uid flex w-full items-center gap-5">
              <img className="w-12 h-12" alt="Bar chart" src={bio} />
              <h3 className="text-xl md:text-2xl font-semibold">
                Connect with Investors:
              </h3>
            </div>
            <div className="flex w-full  gap-5">
              <div className="w-12 flex items-center justify-center">
                <div className="w-0.5 h-full bg-gray-300 ml-2"></div>
              </div>
              <p className="text-base md:text-lg text-gray-600 uid w-full">
                Get funding for your beehives by connecting with investors who
                believe in your potential and are ready to support your growth.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="relative grid items-start gap-4 mb-6">
            <div className="uid flex w-full items-center gap-5">
              <img className="w-12 h-12" alt="Trophy" src={stats} />
              <h3 className="text-xl md:text-2xl font-semibold">
                Manage Your Hives
              </h3>
            </div>
            <div className="flex w-full  gap-5">
              <div className="w-12 flex items-center justify-center">
                <div className="w-0.5 h-full bg-gray-300 ml-2"></div>
              </div>
              <p className="text-base md:text-lg text-gray-600 uid w-full">
                Use the dashboard to track your hive’s performance, monitor
                honey production, and communicate with investors.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="relative grid items-start gap-4 mb-6">
            <div className="uid flex w-full items-center gap-5">
              <img className="w-12 h-12" alt="Trophy" src={rise} />
              <h3 className="text-xl md:text-2xl font-semibold">
                Grow Your Income
              </h3>
            </div>
            <div className="flex w-full  gap-5">
              <div className="w-12 flex items-center justify-center">
                <div className="w-0.5 h-full bg-gray-300 ml-2"></div>
              </div>
              <p className="text-base md:text-lg text-gray-600 uid w-full">
                With the support and resources provided, watch your beekeeping
                venture flourish, leading to increased income and long-term
                success.
              </p>
            </div>
          </div>
        </div>
        {/* Image Section */}
        <img
          className="h-56 md:h-auto object-cover uid w-full rounded-lg"
          src={beeshow}
          alt="research"
        />
      </div>
    </div>
  );
};

export default BeeHow;
