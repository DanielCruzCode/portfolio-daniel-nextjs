import { SVGProps } from "react";

export const BlobRight = (props: SVGProps<SVGSVGElement>) => (
  <svg width={197} height={417} fill="none" {...props}>
    <path
      d="M177.2 108.28c22.465-25.6 59.971-41.182 80.144-24.227 19.957 16.829 22.725 66.138 17.52 116.736-5.347 50.657-18.81 102.661-42.551 103.669-23.741 1.009-57.761-48.977-71.237-91.813-13.477-42.837-6.125-78.638 16.124-104.365Z"
      fill={`${props.fill || "#FECD4F"}`}
    />
  </svg>
);

export const BlobLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg width={219} height={278} fill="none" {...props}>
    <path
      d="M21.623-35.744c33.662-5.19 72.416 6.956 76.988 32.91 4.486 25.716-25.064 65.286-61.553 100.724C.422 133.28-43.3 164.49-62.144 150.015c-18.844-14.476-12.81-74.639 4.375-116.127 17.185-41.487 45.816-64.205 79.392-69.632Z"
      fill={`${props.fill || "#FECD4F"}`}
    />
  </svg>
);
