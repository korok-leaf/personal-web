import React from "react";

const Header = () => {

  const handleClick = () => {
    
  }

  return (
    <div className="fixed top-4 right-4 flex space-x-4">
      <button className="text-grey px-4 py-2 rounded">projects</button>
      <button className="text-grey px-4 py-2 rounded">Resume</button>
    </div>
  );
}

export default Header;