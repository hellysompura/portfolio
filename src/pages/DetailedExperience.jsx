import React from "react";
import { useLocation } from "react-router-dom";
import { PROJECTS_DATA } from "../utils/CommonData";
import Icon from "../components/Icon";

export default function DetailedExperience() {
  const location = useLocation();
  const orgName = location?.state?.orgName;

  return (
    <React.Fragment>
      <div>
        <div className="text-4xl font-bold text-center text-(--orange)">
          {orgName}
        </div>

        <div>
          {PROJECTS_DATA[orgName]?.map((project, index) => (
            <div
              key={index}
              className="my-6 flex justify-between items-start cursor-pointer"
            >
              <div>
                <h2 className="text-2xl font-semibold">{project.title}</h2>
                <div className="text-[15px]">
                  <ul className="list-disc list-inside text-left">
                    {project.description.map((desc, index) => (
                      <li key={index} className="mb-2">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex lg:flex-row flex-col justify-start items-start lg:items-center gap-2.5">
                  <div className="text-[15px] font-semibold">Tools used:</div>
                  <div className="text-[15px]">{project.tools.join(", ")}</div>
                </div>
              </div>

              <div>
                <Icon
                  name="arrow-up-right"
                  size={20}
                  color="var(--orange-50)"
                  onClick={() => window.open(project.link, "_blank")}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
