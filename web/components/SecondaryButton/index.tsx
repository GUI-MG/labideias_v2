import React from "react";
import "./style.scss";

type secondaryButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    insideText: string,
    icon?: React.ReactNode,
    // isAsync?: boolean,
    isDropMenu?: boolean,
    isNav?: boolean,
};

export const SecondaryButton = (props: secondaryButtonProps) => {

    return (
        <button
        type="button" 
        className={`secondaryButton ${props.isNav ? "nav" : ""}`}
        >
            {props.isDropMenu ? (
                <>
                {props.insideText}
                {props.icon}
                </>
            )
            :
            (
                <>
                {props.icon}
                {props.insideText}
                </>
            )
            }
        </button>
    );
}