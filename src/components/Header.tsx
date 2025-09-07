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
      <div className="flex float-right drop-shadow-xl gap-3">
        <button className="relative group px-6 py-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 ease-out hover:from-purple-500/20 hover:to-blue-500/20 hover:border-white/30 hover:shadow-purple-500/25 hover:shadow-2xl hover:-translate-y-1 hover:scale-105" onClick={projectsClick}>
          <span className="relative z-10">Projects</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </button>
        <button className="relative group px-6 py-3 bg-gradient-to-r from-blue-500/10 to-teal-500/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 ease-out hover:from-blue-500/20 hover:to-teal-500/20 hover:border-white/30 hover:shadow-blue-500/25 hover:shadow-2xl hover:-translate-y-1 hover:scale-105" onClick={resumeClick}>
          <span className="relative z-10">Resume</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </button>
      </div>
  );
}

export default Header;