import { ComponentProps } from 'react'

export function EnvelopeHeartIcon(props: ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="none"
      {...props}
    >
      <path
        d="M11.3066 8.66699C11.7132 8.66699 12.0533 8.77366 12.3333 8.94033C12.5626 8.80633 12.8332 8.70966 13.1466 8.67766C13.2506 8.667 13.3333 8.58633 13.3333 8.48233V4.66699C13.3333 3.33366 12.6666 2.66699 11.3333 2.66699H3.33325C1.99992 2.66699 1.33325 3.33366 1.33325 4.66699V10.667C1.33325 12.0003 1.99992 12.667 3.33325 12.667H9.06665C9.25132 12.667 9.29996 12.5023 9.26196 12.4163C9.1733 12.213 9.10664 11.997 9.05998 11.767C8.89331 10.8937 9.0733 10.0603 9.5533 9.46699C9.9733 8.95366 10.5932 8.66699 11.3066 8.66699ZM8.01929 8.11966C7.81395 8.26899 7.57325 8.34366 7.33325 8.34366C7.09325 8.34366 6.85188 8.26899 6.64722 8.12032L3.37264 5.73832C3.14931 5.57632 3.09995 5.263 3.26261 5.03966C3.42461 4.81766 3.73585 4.76632 3.96118 4.92966L7.23592 7.31099C7.29459 7.35299 7.37257 7.35366 7.43123 7.31099L10.706 4.92966C10.9306 4.76632 11.2425 4.817 11.4045 5.03966C11.5672 5.263 11.5178 5.57565 11.2945 5.73832L8.01929 8.11966ZM14.6252 11.5697C14.3212 13.1117 12.3359 14.0003 12.3359 14.0003C12.3359 14.0003 10.3506 13.1123 10.0466 11.5697C9.85996 10.6237 10.2679 9.67166 11.3046 9.66699C12.0766 9.66366 12.3359 10.429 12.3359 10.429C12.3359 10.429 12.5953 9.66366 13.3673 9.66699C14.4066 9.67166 14.8119 10.6237 14.6252 11.5697Z"
        fill={props.fill ?? '#9B9B9B'}
      />
    </svg>
  )
}
