import React from "react";

const Vestor = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
      width="190"
      height="190"
      viewBox="0 0 190 190"
    >
      <defs>
        <filter
          id="Ellipse_39"
          x="0"
          y="0"
          width="190"
          height="190"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="15" result="blur" />
          <feFlood floodOpacity="0.2" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g id="_vestor" data-name='" vestor' transform="translate(-567 -3084)">
        <g transform="matrix(1, 0, 0, 1, 567, 3084)" filter="url(#Ellipse_39)">
          <circle
            id="Ellipse_39-2"
            data-name="Ellipse 39"
            cx="50"
            cy="50"
            r="50"
            transform="translate(45 45)"
            fill="#249126"
            opacity="0.2"
          />
        </g>
        <circle
          id="Ellipse_40"
          data-name="Ellipse 40"
          cx="33"
          cy="33"
          r="33"
          transform="translate(629 3146)"
          fill="#249126"
          opacity="0.5"
        />
        <circle
          id="Ellipse_42"
          data-name="Ellipse 42"
          cx="21"
          cy="21"
          r="21"
          transform="translate(641 3158)"
          fill="#249126"
        />
      </g>
    </svg>
  );
};

export default Vestor;
