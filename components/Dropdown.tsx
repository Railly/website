import { useRef, useState } from "react";
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
        className="inline-flex items-center px-4 py-1 text-sm font-semibold text-center transition-colors border rounded-lg text-white bg-[#191d21] hover:bg-cyan-700 border-cyan-700 hover:text-white"
        type="button"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        Follow
      </button>
      <div
        id="dropdown"
        className={`z-10 absolute mt-2 divide-y divide-gray-100 rounded shadow w-28 sm:w-36 bg-gray-700 ${
          dropdownOpen ? "block" : "hidden"
        }`}
      >
        <ul
          className="py-1 text-sm text-gray-200"
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
}> = (props) => {
  return (
    <li>
      <a
        href={props.to}
        target={props.external ? "_blank" : "_self"}
        rel="noopener noreferrer"
        className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
      >
        {props.children}
      </a>
    </li>
  );
};

export default Dropdown;
