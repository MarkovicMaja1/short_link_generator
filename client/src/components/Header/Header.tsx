import * as React from "react";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <div className="bg-slate-900">
      <div className="container p-2 mx-auto">
        <nav className="py-5 flex justify-end"> 
          <div className="text-base text-white">Short Link Generator</div>
        </nav>
      </div>
    </div>

  );
};

export default Header;