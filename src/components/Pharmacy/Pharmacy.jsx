import css from "./Pharmacy.module.css";
import { useEffect, useRef } from "react";

export const Pharmacy = ({ pharmacy }) => {
    const phormasyButtonRef = useRef(null);

    useEffect(() => {
        if (phormasyButtonRef.current) {
            const realScreenWidth = window.innerWidth;
            const phormasyButton = phormasyButtonRef.current;
            phormasyButton.style.width = realScreenWidth / 9.6 + 'px';
            phormasyButton.style.height = realScreenWidth / 29 + 'px';
            phormasyButton.style.fontSize = realScreenWidth/103 + 'px';
        }
    });
    return (
        <button ref={phormasyButtonRef} className={css.phormasyButton}>
            {pharmacy.name}
        </button>
    )
};