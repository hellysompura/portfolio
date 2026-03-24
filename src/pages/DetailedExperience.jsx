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
                <p className="text-sm">{project.description}</p>
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
