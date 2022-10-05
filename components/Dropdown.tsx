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
        className="text-indigo-800 dark:text-white dark:border-white bg-white hover:bg-indigo-800 font-semibold rounded-lg text-sm px-4 py-1 text-center inline-flex items-center dark:bg-black dark:hover:bg-indigo-700 border-indigo-700 border hover:text-white transition-colors"
        type="button"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        Follow
      </button>
      <div
        id="dropdown"
        className={`z-10 absolute mt-2 bg-white divide-y divide-gray-100 rounded shadow w-28 sm:w-36 dark:bg-gray-700 ${
          dropdownOpen ? "block" : "hidden"
        }`}
      >
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200"
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
        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        {props.children}
      </a>
    </li>
  );
};

export default Dropdown;
