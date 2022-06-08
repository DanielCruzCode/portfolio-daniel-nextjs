import { SVGProps } from "react";

import { useCurrentViewportSize } from "hooks/useCurrentViewportSize";

const DESKTOP_BREAKPOINT = 1040;

export const BlobRight = (props: SVGProps<SVGSVGElement>) => {
  const { currentViewportSize } = useCurrentViewportSize();

  if (currentViewportSize >= DESKTOP_BREAKPOINT) {
    return (
      <svg width={328} height={225} fill="none" {...props}>
        <path
          d="M95.5 2.264C129.162-2.927 171 .358 274.5 18.5c121.5 21.297.758 156.684-35.731 192.122-36.636 35.39-208.192-8.123-227.036-22.599-18.844-14.476-12.81-74.639 4.375-116.127C33.293 30.41 61.924 7.691 95.5 2.264Z"
          fill={`${props.fill || "#FECD4F"}`}
        />
        <path
          d="M95.5 2.264C129.162-2.927 171 .358 274.5 18.5c121.5 21.297.758 156.684-35.731 192.122-36.636 35.39-208.192-8.123-227.036-22.599-18.844-14.476-12.81-74.639 4.375-116.127C33.293 30.41 61.924 7.691 95.5 2.264Z"
          fill={`${props.fill || "#FECD4F"}`}
        />
      </svg>
    );
  }
  return (
    <svg width={197} height={417} fill="none" {...props}>
      <path
        d="M177.2 108.28c22.465-25.6 59.971-41.182 80.144-24.227 19.957 16.829 22.725 66.138 17.52 116.736-5.347 50.657-18.81 102.661-42.551 103.669-23.741 1.009-57.761-48.977-71.237-91.813-13.477-42.837-6.125-78.638 16.124-104.365Z"
        fill={`${props.fill || "#FECD4F"}`}
      />
    </svg>
  );
};

export const BlobLeft = (props: SVGProps<SVGSVGElement>) => {
  const { currentViewportSize } = useCurrentViewportSize();

  if (currentViewportSize >= DESKTOP_BREAKPOINT) {
    return (
      <svg width={314} height={274} fill="none" {...props}>
        <path
          d="M77.5 3C111.162-2.19 97.342.98 200.842 19.121 322.342 40.418 330.489 230.902 294 266.34 257.364 301.73 26.844 202.976 8 188.5c-18.844-14.476.92-84.398 18.106-125.886C43.291 21.127 43.924 8.428 77.5 3Z"
          fill={`${props.fill || "#FECD4F"}`}
        />
        <path
          d="M77.5 3C111.162-2.19 97.342.98 200.842 19.121 322.342 40.418 330.489 230.902 294 266.34 257.364 301.73 26.844 202.976 8 188.5c-18.844-14.476.92-84.398 18.106-125.886C43.291 21.127 43.924 8.428 77.5 3Z"
          fill={`${props.fill || "#FECD4F"}`}
        />
      </svg>
    );
  }
  return (
    <svg width="174" height="191" viewBox="0 0 174 191" fill="none" {...props}>
      <path
        d="M95.6231 1.25573C129.285 -3.93489 168.039 8.21215 172.611 34.1654C177.097 59.8818 147.547 99.452 111.058 134.89C74.4221 170.28 30.7005 201.491 11.8563 187.015C-6.98784 172.539 -0.954562 112.376 16.2306 70.8885C33.4158 29.4008 62.0467 6.68324 95.6231 1.25573Z"
        fill={`${props.fill || "#FECD4F"}`}
      />
    </svg>
  );
};
