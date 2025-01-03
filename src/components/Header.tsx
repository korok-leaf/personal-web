import React from "react";
import { useRouter } from "next/navigation";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const router = useRouter();

  const projectsClick = () => {
    router.push("/projects");
  }

  return (
    <div className="fixed top-4 right-4 flex space-x-4">
      <button className="text-grey px-4 py-2 rounded" onClick={projectsClick}>projects</button>
      <button className="text-grey px-4 py-2 rounded">Resume</button>
    </div>
  );
}

export default Header;