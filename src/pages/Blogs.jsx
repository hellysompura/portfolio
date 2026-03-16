import React from "react";
import { BLOGS_DATA } from "../utils/CommonData";
import Icon from "../components/Icon";

export default function Blogs() {
  return (
    <React.Fragment>
      <div>
        <h1 className="lg:text-[90px] text-[60px] font-bold uppercase tracking-wider leading-none">
          Honest
        </h1>
        <h1 className="lg:text-[90px] text-[60px] text-(--gray-20) font-bold uppercase tracking-wider leading-none">
          Opinions
        </h1>
      </div>

      <div>
        {BLOGS_DATA.map((blog, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-2 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => window.open(blog.link, "_blank")}
          >
            <div className="flex-1">
              <h2 className="text-2xl font-semibold">{blog.title}</h2>
              <p className="text-sm">{blog.description}</p>
            </div>

            <div>
              <Icon name="arrow-up-right" size={20} color="var(--orange-50)" />
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
