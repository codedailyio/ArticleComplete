import React from "react";

export const CheckMark = () => {
  return (
    <svg viewBox="0 0 20 20" width="45px" height="45px" className="center-icon">
      <g fill="#FFF">
        <rect y={10} width={2} height={2} />
        <rect x={2} y={12} width={2} height={2} />
        <rect x={4} y={14} width={2} height={2} />
        <rect x={6} y={16} width={2} height={2} />
        <rect x={8} y={14} width={2} height={2} />
        <rect x={10} y={12} width={2} height={2} />
        <rect x={12} y={10} width={2} height={2} />
        <rect x={14} y={8} width={2} height={2} />
        <rect x={16} y={6} width={2} height={2} />
        <rect x={18} y={4} width={2} height={2} />
      </g>
    </svg>
  );
};

export const Close = () => {
  return (
    <svg viewBox="0 0 20 20" width="45px" height="45px" className="center-icon">
      <path d="M0,2.9h2.9V0H0V2.9z M2.9,5.7h2.9V2.9H2.9V5.7z M5.7,8.6h2.9V5.7H5.7V8.6z M8.6,11.4h2.9V8.6H8.6V11.4z M5.7,14.3h2.9v-2.9H5.7V14.3z M2.9,17.1h2.9v-2.9H2.9V17.1z M0,20h2.9v-2.9H0V20z M11.4,14.3h2.9v-2.9h-2.9V14.3z M14.3,17.1h2.9v-2.9h-2.9V17.1zM17.1,20H20v-2.9h-2.9V20z M11.4,8.6h2.9V5.7h-2.9V8.6z M14.3,5.7h2.9V2.9h-2.9V5.7z M17.1,2.9H20V0h-2.9V2.9z" />
    </svg>
  );
};
