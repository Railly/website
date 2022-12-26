import React, { useRef, useState } from "react";
import useOnClickOutside from "../hooks/use-on-click-outside";

const Dropdown: React.FC<{
  options: { to: string; external: boolean; text: string }[];
}> = ({ options }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  //button ref
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => setDropdownOpen(false));

  return (
    <div ref={ref}>
      <button
        id="dropdownDefault"
        data-dropdown-toggle="dropdown"
        className="inline-flex items-center px-4 py-1 text-sm font-semibold text-center transition-colors ring-2 rounded-lg text-white bg-[#191d21] hover:bg-hunter-blue-700 ring-hunter-blue-700 hover:text-white"
        type="button"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        Follow
      </button>
      <div
        id="dropdown"
        className={`z-10 absolute shadow-lg shadow-hunter-black-900/80 mt-2 divide-y divide-hunter-black-100 rounded w-24 sm:w-30 bg-hunter-black-800 ${
          dropdownOpen ? "block" : "hidden"
        }`}
      >
        <ul
          className="text-sm text-hunter-black-200"
          aria-labelledby="dropdownDefault"
        >
          {options.map((option) => (
            <DropdownItem
              key={option.text}
              to={option.to}
              external={option.external}
            >
              {option.text}
            </DropdownItem>
          ))}
        </ul>
      </div>
    </div>
  );
};

const DropdownItem: React.FC<{
  to: string;
  external?: boolean;
  children: React.ReactNode;
}> = (props) => {
  return (
    <li>
      <a
        href={props.to}
        target={props.external ? "_blank" : "_self"}
        rel="noopener noreferrer"
        className="block px-4 py-2 transition-colors hover:bg-hunter-blue-900 hover:text-white"
      >
        {props.children}
      </a>
    </li>
  );
};

export default Dropdown;
