'use client'
import { FaCheck } from "react-icons/fa6";

import SocialMediaSection from './SocialMedia';
import { useMemo, useState } from 'react';
import data from '../../../../public/socialMedia.json'

const WhyChooseSection = () => {
  const [active, setActive] = useState(1)

  const filterData = useMemo(() => {
    return data?.find(x => x?.id === active)
  }, [active])
  return (
    <>
      <SocialMediaSection setActive={setActive} active={active} />
      <section className="max-w-[1135px] mx-auto md:py-12 py-6 px-5 md:px-0">
        <h2 className="text-lg md:text-3xl font-bold mb-6">
          {filterData?.Overview || ""}
        </h2>
        <p className="mb-6">
          {filterData?.Introduction || ""}
        </p>

        {/* Dynamically render bullet points */}
        <div className="space-y-4">
          {filterData?.Strategies?.map((point, index) => (
            <div className="flex items-start" key={index}>
              <div>
                <FaCheck className="text-green-400 w-5 text-3xl md:text-5xl mt-1 mr-3" />
              </div>
              <p>
                <strong>{point?.title}:</strong> {point?.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WhyChooseSection;
