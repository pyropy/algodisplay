import React from 'react'


type BarProps = {
    current: boolean,
    sorted: boolean,
    value: number
}

const Bar: React.FC<BarProps> = ({ value, current, sorted }) => {
    return (
        <React.Fragment>
            <div
                className={`bar${current ? "current" : ""}`}
                style={{ height: (value * 0.4).toString() + "em" }}
            />
        </React.Fragment>
    )
}

export default Bar;