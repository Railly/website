import { ESocialMedia } from "@/types/enums";
import Icon from "../icons";

export const SocialLinks = () => {
  return (
    <aside className="flex flex-col items-center col-[3]">
      <div className="fixed top-0 z-[1] h-screen">
        <div className="grid grid-rows-[158px,auto,158px] h-full content-between py-12">
          <div className="row-[2/3] min-w-0 space-y-2">
            <Icon
              href="https://twitter.com/raillyhugo"
              name={ESocialMedia.Twitter}
            />
            <Icon href="https://github.com/Railly" name={ESocialMedia.Github} />
            <Icon
              href="https://www.linkedin.com/in/railly-hugo/"
              name={ESocialMedia.LinkedIn}
            />
          </div>
        </div>
      </div>
    </aside>
  );
};
