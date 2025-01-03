import React from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  const projectsClick = () => {
    router.push("/projects");
  }

  const resumeClick = () => {

  }

  return (
      <div className="flex float-right">
        <button className="text-grey px-4 py-2 rounded" onClick={projectsClick}>Projects</button>
        <button className="text-grey px-4 py-2 rounded">Resume</button>
      </div>
  );
}

export default Header;