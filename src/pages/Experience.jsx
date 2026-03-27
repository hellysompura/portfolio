import React from "react";
import { COMMON_DATA } from "../utils/CommonData";
import Icon from "../components/Icon";
import { useNavigate } from "react-router-dom";

export default function Experience() {
  const navigate = useNavigate();

  const handleExperienceClick = (e, item) => {
    e.stopPropagation();

    navigate("/experience", {
      state: {
        orgName: item.organization,
      },
    });
  };

  return (
    <React.Fragment>
      <div id="experience">
        <h1 className="lg:text-[90px] md:text-[60px] text-[50px] font-bold uppercase tracking-wider leading-none">
          5 years of
        </h1>
        <h1 className="lg:text-[90px] md:text-[60px] text-[50px] text-(--gray-20) font-bold uppercase tracking-wider leading-none">
          Experience
        </h1>
      </div>

      <div>
        {COMMON_DATA.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-start my-6 cursor-pointer"
            onClick={(e) => handleExperienceClick(e, item)}
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-semibold">{item.organization}</h2>
              <p className="text-sm text-(--gray-70)">{item.description}</p>
              <p className="text-xs text-(--gray-70)">{item.experience.join(" - ")}</p>
            </div>

            <div>
              <Icon
                name="arrow-up-right"
                size={20}
                color="var(--orange-50)"
                onClick={(e) => handleExperienceClick(e, item)}
              />
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
