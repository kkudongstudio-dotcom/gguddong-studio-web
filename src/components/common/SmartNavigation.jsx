import { useEffect, useState } from "react";

function SmartNavigation() {
  const sections = [
    "home",
    "about",
    "projects",
    "business",
    "ai-team",
    "news",
    "contact",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let activeIndex = 0;

      sections.forEach((id, index) => {
        const section = document.getElementById(id);

        if (section && section.offsetTop <= scrollPosition) {
          activeIndex = index;
        }
      });

      setCurrentIndex(activeIndex);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLastSection = currentIndex >= sections.length - 1;

  const handleClick = () => {
    const targetId = isLastSection
      ? "home"
      : sections[currentIndex + 1];

    document
      .getElementById(targetId)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      className="smart-navigation"
      onClick={handleClick}
      aria-label={isLastSection ? "맨 위로 이동" : "다음 섹션으로 이동"}
    >
      <span>{isLastSection ? "TOP" : "NEXT"}</span>
      <strong>{isLastSection ? "⌃" : "⌄"}</strong>
    </button>
  );
}

export default SmartNavigation;