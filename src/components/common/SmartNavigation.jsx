import { useEffect, useState } from "react";

function SmartNavigation() {
  const sections = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "projects", label: "PROJECTS" },
    { id: "business", label: "BUSINESS" },
    { id: "ai-team", label: "AI TEAM" },
    { id: "news", label: "NEWS" },
    { id: "contact", label: "CONTACT" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY + window.innerHeight / 2;

      let activeIndex = 0;

      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);

        if (element && element.offsetTop <= scrollPosition) {
          activeIndex = index;
        }
      });

      setCurrentIndex(activeIndex);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLastSection =
    currentIndex >= sections.length - 1;

  const handleClick = () => {
    const targetId = isLastSection
      ? "home"
      : sections[currentIndex + 1].id;

    document
      .getElementById(targetId)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <button
      className="smart-navigation"
      onClick={handleClick}
      aria-label={
        isLastSection
          ? "맨 위로 이동"
          : "다음 섹션으로 이동"
      }
    >
      <span>
        {isLastSection
          ? "TOP"
          : sections[currentIndex + 1].label}
      </span>

      <strong>{isLastSection ? "⌃" : "⌄"}</strong>
    </button>
  );
}

export default SmartNavigation;