/* eslint-disable @next/next/no-server-import-in-page */
/* eslint-disable @next/next/no-img-element */
// /pages/api/og.tsx

import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import "../../styles/globals.css";

export const config = {
  runtime: "experimental-edge",
};

const boldFont = fetch(
  new URL("../../public/fonts/DMSans-Bold.ttf", import.meta.url).toString()
).then((res) => res.arrayBuffer());

const mediumFont = fetch(
  new URL("../../public/fonts/DMSans-Medium.ttf", import.meta.url).toString()
).then((res) => res.arrayBuffer());

export default async function ImageHandler(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title");
  const date = searchParams.get("date");

  const bold = await boldFont;
  const medium = await mediumFont;

  const randomLinearGradient = () => {
    const randomColor1 = () => Math.floor(Math.random() * 255);
    const randomColor2 = () => Math.floor(Math.random() * 255);
    const color1 = `rgba(${randomColor1()}, ${randomColor2()}, ${randomColor2()}, 0.3)`;
    const color2 = `rgba(${randomColor1()}, ${randomColor2()}, ${randomColor2()}, 0.3)`;
    const randomAngle = () => Math.floor(Math.random() * 360);
    const randomNumberGradient1 = () =>
      Math.floor(Math.random() * (100 - 45 + 1) + 45);
    const randomNumberGradient2 = () =>
      Math.floor(Math.random() * (44 - 0 + 1) + 0);
    return `linear-gradient(${randomAngle()}deg, ${color1} ${randomNumberGradient1()}%, ${color2} ${randomNumberGradient2()}%)`;
  };

  return new ImageResponse(
    (
      <div
        tw="text-[128px] w-full h-full flex flex-col text-center items-center justify-between py-11"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #141318 0%, #605e6755 15%)",
          backgroundSize: "50px 50px",
        }}
      >
        <div tw="flex w-full justify-between px-11">
          <img
            width="120"
            height="120"
            src="https://www.raillyhugo.com/images/profile-2.png"
            tw="rounded-full"
            alt="Railly Hugo"
          />
          <img
            width="105"
            height="120"
            src="https://www.raillyhugo.com/svg/rh-logo.svg"
            alt="RH"
          />
        </div>
        <div tw="relative max-w-[30ch] justify-center w-full text-white flex text-[64px] font-bold break-words">
          <div
            tw="absolute max-w-[30ch] w-[350px] h-[300px] text-white flex text-[64px]"
            style={{
              backgroundImage: randomLinearGradient(),
              filter: "blur(40px)",
              transform: "scale(2.5, 1.5)",
              borderRadius: "50%",
            }}
          />
          <p
            tw="mx-[75px]"
            style={{
              fontFamily: "DM Sans Bold",
            }}
          >
            {title}
          </p>
        </div>
        <div
          tw="flex text-[32px] text-[#7D8EA4] font-semibold"
          style={{
            fontFamily: "DM Sans Medium",
          }}
        >
          raillyhugo.com · {date}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
      fonts: [
        {
          name: "DM Sans Bold",
          data: bold,
          style: "normal",
        },
        {
          name: "DM Sans Medium",
          data: medium,
          style: "normal",
        },
      ],
    }
  );
}
