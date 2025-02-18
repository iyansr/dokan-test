import { SVGProps } from "react";

export function IconTail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <path
        stroke="#1D1F1E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.75 10h10.5M10 4.75 15.25 10 10 15.25"
      />
    </svg>
  );
}
