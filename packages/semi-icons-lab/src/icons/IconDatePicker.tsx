import * as React from 'react';
import { convertIcon } from '../components/Icon';
function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            focusable={false}
            aria-hidden={true}
            {...props}
        >
            <g clipPath="url(#clip0_1_3038)">
                <rect x={1} y={4} width={22} height={16} rx={3} fill="#DDE3E8" />
                <path
                    d="M6.5 11H9V13.5H6.5V11ZM12.5 15.5H5.5V10H12.5V15.5ZM12.5 7.5H12V6.5H11V7.5H7V6.5H6V7.5H5.5C4.945 7.5 4.5 7.95 4.5 8.5V15.5C4.5 16.05 4.95 16.5 5.5 16.5H12.5C13.05 16.5 13.5 16.05 13.5 15.5V8.5C13.5 7.95 13.05 7.5 12.5 7.5Z"
                    fill="#4CC3FA"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.5 12.7929C13.5 11.902 14.5771 11.4558 15.2071 12.0858L23.9142 20.7929C24.5442 21.4228 24.098 22.5 23.2071 22.5H19.2488C18.6797 22.5 18.1376 22.7424 17.7581 23.1665L15.2453 25.9756C14.6333 26.6597 13.5 26.2268 13.5 25.3089V12.7929ZM17.6837 21H22L15 14V24L17.6837 21Z"
                    fill="white"
                />
                <path d="M15 24V14L22 21H17.6837L15 24Z" fill="#324350" />
            </g>
            <defs>
                <clipPath id="clip0_1_3038">
                    <rect width={24} height={24} fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}
const IconComponent = convertIcon(SvgComponent, 'date-picker');
export default IconComponent;
