import React from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  const projectsClick = () => {
    router.push("/projects");
  }

  const resumeClick = () => {
    window.open("/AlexQinResume.pdf", "_blank");
  }

  return (
      <div className="flex float-right drop-shadow-sm">
        <button className="text-grey px-4 py-2 rounded transition ease-in-out delay-150 text-shadow-dark hover:-translate-y-1 hover:scale-110 duration-300" onClick={projectsClick}>Projects</button>
        <button className="text-grey px-4 py-2 rounded transition ease-in-out delay-150 text-shadow-dark hover:-translate-y-1 hover:scale-110 duration-300" onClick={resumeClick}>Resume</button>
      </div>
  );
}

export default Header;