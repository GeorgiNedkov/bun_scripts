import { $ } from "bun";

export const getHLSVideo = (
  headers: Record<string, string>,
  link: string,
  output: string
) => {
  const command = [
    `ffmpeg -i "${link}" -c copy -bsf:a aac_adtstoasc "${output}"`,
    ...Object.keys(headers).map((key) => {
      return `-headers "${key}: ${headers[key]}"`;
    }),
  ].join(" ");

  return $`${{
    raw: command,
  }}`;
};
