/* eslint-disable @next/next/no-img-element */
interface IProps {
  position: string;
  company: {
    name: string;
    image_url: string;
  };
  startDate: string;
  endDate: string;
  responsibilities: string[];
  isLatest?: boolean;
}

const WorkExperience: React.FC<IProps> = ({
  position,
  company,
  startDate,
  endDate,
  responsibilities,
  isLatest,
}) => {
  return (
    <>
      <span className="absolute flex items-center justify-center w-6 h-6 rounded-full bg-hunter-blue-100 -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-hunter-blue-900">
        <svg
          aria-hidden="true"
          className="w-3 h-3 text-hunter-blue-600 dark:text-hunter-blue-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clipRule="evenodd"
          ></path>
        </svg>
      </span>
      <div className="flex flex-col gap-2 mb-2 sm:mb-1 sm:items-center sm:flex-row">
        <h3 className="flex items-center text-lg font-semibold text-zinc-900 dark:text-white">
          {position}
          {isLatest && (
            <span className="bg-hunter-blue-100 shadow-lg shadow-hunter-blue-400/20 text-hunter-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-hunter-blue-200 dark:text-hunter-blue-800 ml-3">
              Latest
            </span>
          )}
        </h3>
        <span className="hidden sm:block">·</span>
        <h4 className="flex items-center text-base font-semibold text-hunter-black-500 dark:text-hunter-black-300">
          @{company.name}
          <img
            src={company.image_url}
            alt={company.name}
            className="inline-block w-6 h-6 ml-2 rounded-md"
          />
        </h4>
      </div>
      <time className="block mb-2 text-sm font-normal leading-none text-zinc-500 dark:text-zinc-500">
        {startDate} - {endDate}
      </time>
      <ul className="mb-4 text-base font-normal text-hunter-black-800 dark:text-hunter-black-200">
        {responsibilities.map((responsibility, index) => (
          <li key={index} className="mb-2 ml-6 list-disc">
            {responsibility}
          </li>
        ))}
      </ul>
    </>
  );
};

export default WorkExperience;
