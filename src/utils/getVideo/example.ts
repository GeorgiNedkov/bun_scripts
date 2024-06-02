import { mkdirSync } from "fs";
import { getHLSVideo } from "./getHLSVideo";

export const exampleGetHLSVideo = () => {
  const headers: Record<string, string> = {
    accept: "*/*",
    "accept-language": "en-GB,en;q=0.9",
    priority: "u=1, i",
    "sec-ch-ua": '"Chromium";v="125", "Not.A/Brand";v="24"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"macOS"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    Referer: "https://www.pornhub.com/",
    "Referrer-Policy": "strict-origin-when-cross-origin",
  };

  mkdirSync("./mp4/", { recursive: true });
  const output = "./mp4/Modern_Warfare.mp4";

  const link =
    "https://ev-h.phncdn.com/hls/videos/202310/23/441722181/,1080P_4000K,720P_4000K,480P_2000K,240P_1000K,_441722181.mp4.urlset/index-f4-v1-a1.m3u8?validfrom=1717328670&validto=1717335870&ipa=212.39.89.170&hdl=-1&hash=w4JKKKIp4rvBuHjMwipPqcFuhxM%3D";

  return getHLSVideo(headers, link, output);
};
