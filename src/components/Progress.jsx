
import React, { useState } from 'react';

const CircularProgressBar = ({ sqSize = 100, percentage = 25, strokeWidth = 10 }) => {
    const radius = (sqSize - strokeWidth) / 2;
    const viewBox = `0 0 ${sqSize} ${sqSize}`;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - dashArray * percentage / 100;

    return (
        <svg  style={{ width: '100px', height:'100px'}}viewBox={viewBox}>
            <circle
                className="circle-background"
                cx={sqSize / 2}
                cy={sqSize / 2}
                r={radius}
                strokeWidth={`${strokeWidth}px`}
            />
            <circle
                className="circle-progress"
                cx={sqSize / 2}
                cy={sqSize / 2}
                r={radius}
                strokeWidth={`${strokeWidth}px`}
                transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
                style={{
                    strokeDasharray: dashArray,
                    strokeDashoffset: dashOffset
                }}
            />
            <text
                className="circle-text"
                x="50%"
                y="50%"
                dy=".3em"
                textAnchor="middle"
            >+
                {`${percentage}%`}
            </text>
        </svg>
    );
};


const Progress = ({percentage: propPercentage}) => {

    const [percentage, setPercentage] = useState(propPercentage);
    return (
        <div>
            <CircularProgressBar
                strokeWidth="10"
                sqSize="200"
                percentage={percentage}
            />
        </div>
    )
}




export default Progress