import React, { useState } from "react";
import "./style.scss";

type primaryButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    insideText: string,
    icon?: React.ReactNode,
    isAsync?: boolean,
    isDropMenu?: boolean,
}

export const PrimaryButton = (props: primaryButtonProps) => {

    const [ loading, setLoading ] = useState(false);

    return (
        <button
            type="button"
            className={`primaryButton ${loading ? "loading" : ""}`}
            disabled={loading}
            
            onClick={async () => {
                if(props.isAsync) {
                    setLoading(true);

                    await props.onClick;

                    setLoading(false);                    
                }
                setLoading(false);
            }}
        >
            {props.isDropMenu ? 
                (
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
    )
}