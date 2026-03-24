import Icon from "../components/Icon";

export default function Header() {
  const scrollToSection = (sectionId) => {
    const container = document.getElementById("layout-container");
    const element = document.getElementById(sectionId);
    if (container && element) {
      const top = element.offsetTop - container.offsetTop - 20; // 20px breathing room
      container.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center items-center" id="header">
      <div className="py-3 px-5 bg-[#4240425C] flex gap-5 rounded-sm">
        <Icon
          name="house"
          size={20}
          className="cursor-pointer"
          onClick={() => scrollToSection("aboutMe")}
        />
        {/* <Icon name="folder" size={20} className="cursor-pointer" /> */}
        <Icon
          name="briefcase"
          size={20}
          className="cursor-pointer"
          onClick={() => scrollToSection("experience")}
        />
        <Icon
          name="wrench"
          size={20}
          className="cursor-pointer"
          onClick={() => scrollToSection("skills")}
        />
        <Icon
          name="square-pen"
          size={20}
          className="cursor-pointer"
          onClick={() => scrollToSection("contact")}
        />
      </div>
    </div>
  );
}
