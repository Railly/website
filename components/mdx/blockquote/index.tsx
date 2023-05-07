import { Children, isValidElement, ReactElement } from "react";

enum EFlavor {
  Tip = "Tip",
  Warning = "Warning",
  Danger = "Danger",
  Default = "Default",
}

const getFlavorColors = (flavor: EFlavor) => {
  switch (flavor) {
    case EFlavor.Tip:
      return "border-hunter-green-700 border-l-hunter-green-700";
    case EFlavor.Warning:
      return "border-hunter-yellow-600 border-l-hunter-yellow-600";
    case EFlavor.Danger:
      return "border-hunter-red-700 border-l-hunter-red-700";
    default:
      return "border-hunter-blue-700 border-l-hunter-blue-700";
  }
};

const getFlavorTitleColor = (flavor: EFlavor) => {
  switch (flavor) {
    case EFlavor.Tip:
      return "text-hunter-green-700";
    case EFlavor.Warning:
      return "text-hunter-yellow-600";
    case EFlavor.Danger:
      return "text-hunter-red-700";
    default:
      return "text-hunter-blue-700";
  }
};

const getFlavorIcon = (flavor: EFlavor) => {
  switch (flavor) {
    case EFlavor.Tip:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
          />
        </svg>
      );
    case EFlavor.Warning:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
          />
        </svg>
      );
    case EFlavor.Danger:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
          />
        </svg>
      );
    default:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
          />
        </svg>
      );
  }
};

export function Blockquote(
  props: React.ComponentPropsWithoutRef<"blockquote">
) {
  const childrenArray = Children.toArray(props.children);

  let hasFlavor = false;
  let colorName: EFlavor = EFlavor.Default;
  let childrenToEval: React.ReactNode[] = childrenArray;

  if (childrenArray.length > 0 && isValidElement(childrenArray[0])) {
    const firstChild = childrenArray[0] as ReactElement;
    if (
      firstChild.props.children &&
      typeof firstChild.props.children !== "string"
    ) {
      hasFlavor = true;
      colorName = firstChild.props.children;
      childrenToEval = firstChild.props.children.slice(1);
    }
  }

  const colors = getFlavorColors(colorName);

  return (
    <blockquote
      className={`flex flex-col gap-2 p-4 my-10 shadow-md text-sm border border-l-8 rounded-md bg-zinc-100 dark:bg-zinc-800 ${colors}`}
    >
      {hasFlavor && (
        <div
          className={`flex justify-between font-medium text-[16px] ${getFlavorTitleColor(
            colorName
          )}`}
        >
          <span>{colorName}</span>
          <span>{getFlavorIcon(colorName)}</span>
        </div>
      )}
      <div className="flex-grow text-[15px] leading-7">{childrenToEval}</div>
    </blockquote>
  );
}
