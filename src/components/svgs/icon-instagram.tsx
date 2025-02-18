import { SVGProps } from "react";

export function IconInstagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <path
        stroke="#606060"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M10 13.125a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25Z"
      />
      <path
        stroke="#606060"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.75 2.5h-7.5A3.75 3.75 0 0 0 2.5 6.25v7.5a3.75 3.75 0 0 0 3.75 3.75h7.5a3.75 3.75 0 0 0 3.75-3.75v-7.5a3.75 3.75 0 0 0-3.75-3.75Z"
      />
      <path fill="#606060" d="M14.063 6.875a.937.937 0 1 0 0-1.875.937.937 0 0 0 0 1.875Z" />
    </svg>
  );
}
