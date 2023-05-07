import { Children } from "react";

export function withHeadingId(children: React.ReactNode): React.ReactNode {
  return Children.map(children, (el) => {
    if (typeof el === "string") {
      const re = /\[#([^\]]+)\]\s*$/m;
      const match = el.match(re);

      if (match && match[1]?.length) {
        const headingId = match[1];

        const containerClass = `
          relative
        `;

        const linkClass = `
          absolute
          px-3
          -left-[2rem]
          invisible
          [span:hover_&]:visible
          font-mono
          font-normal
          text-gray-400
          hover:text-gray-600
          dark:text-gray-500
          dark:hover:text-gray-400
        `;

        const anchorClass = `
          absolute
          -top-[20px]
        `;

        return (
          <span className={containerClass}>
            <a className={linkClass} href={`#${headingId}`}>
              #
            </a>
            <a id={headingId} className={anchorClass} />
            {el.substring(0, match.index)}
          </span>
        );
      }
    }

    return el;
  });
}
