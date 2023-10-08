/* eslint-disable @next/next/no-img-element */
import fs from "fs/promises";
import path from "path";
import { ImageResponse, NextRequest } from "next/server";

const boldFontPath = path.join(process.cwd(), "public/fonts/Inter-Bold.ttf");
const mediumFontPath = path.join(
  process.cwd(),
  "public/fonts/Inter-Medium.ttf"
);

const boldFont = fs.readFile(boldFontPath).then((data) => data.buffer);
const mediumFont = fs.readFile(mediumFontPath).then((data) => data.buffer);

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title");
  const date = searchParams.get("date");
  const color = searchParams.get("color");

  const bold = await boldFont;
  const medium = await mediumFont;
  console.log({ color })

  return new ImageResponse(
    (
      <div
        tw="relative bg-rose-400 text-[128px] w-full h-full flex flex-col text-center items-center justify-between py-11"
        style={{
          backgroundSize: "20px 20px",
          backgroundImage: "linear-gradient(180deg, #111111 0%, #111111 100%)",
        }}
      >
        <div tw="absolute w-full h-full flex inset-0 pointer-events-none opacity-30 mix-blend-soft-light">
          <svg width="100%" height="120%">
            <filter id="noise">
              <feTurbulence type="fractalNoise" baseFrequency="6.0" numOctaves="8" stitchTiles="stitch">
              </feTurbulence>
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)">
            </rect>
            <defs>
              <linearGradient id="myGradient" x1="128" y1="5.21659" x2="128" y2="476.551" gradientUnits="userSpaceOnUse">
                <stop stop-color="#C5C5C5" />
                <stop offset="1" stop-color="#383839" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div tw="flex w-full z-50 justify-between px-11">
          <img
            width="124"
            height="124"
            src="https://www.raillyhugo.com/images/profile-2023.png"
            tw="rounded-full"
            alt="Railly Hugo"
          />
          <img
            width="105"
            height="120"
            src="https://www.raillyhugo.com/svg/rh-logo-dark.svg"
            alt="RH"
          />
        </div>
        <div tw="relative max-w-[30ch] -z-20 justify-center w-full text-white flex text-[72px] break-words">
          <div
            tw="absolute top-[5rem] w-screen -z-20 h-[300px] text-white flex text-[64px]"
            style={{
              backgroundColor: "#" + String(color),
              opacity: "0.2",
              filter: "blur(100px)",
              transform: "scale(2.0, 1.0)",
              borderRadius: "50%",
            }}
          />
          <p
            tw="mx-[75px] z-40 font-bold tracking-[-1.92px] !leading-10"
            style={{
              fontFamily: "Inter",
              letterSpacing: "-1.92px",
              lineHeight: "5rem",
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
          {date ? `raillyhugo.com · ${date}` : "raillyhugo.com"}
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
