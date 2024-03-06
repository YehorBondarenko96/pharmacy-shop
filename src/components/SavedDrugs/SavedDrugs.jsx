import { useEffect, useRef } from "react";
import css from "./SavedDrugs.module.css";
import { useSelector } from "react-redux";
import { selectDrugsForShop } from "../../redux/selectors";
import { SevDr } from "../SevDr/SevDr";

export const SavedDrugs = ({realScreenHeight, message}) => {
    const drugsSh = useSelector(selectDrugsForShop);

    const allDivSDRef = useRef(null);
    const ulSDRef = useRef(null);
    const nothPRef = useRef(null);

    useEffect(() => {
        if (allDivSDRef.current) {
            const realScreenWidth = window.innerWidth;
            const allDivSD = allDivSDRef.current;
            allDivSD.style.height = realScreenHeight - realScreenHeight/2.5 + 'px';
            allDivSD.style.width = (realScreenWidth - 40 - realScreenWidth / 50) / 2 - (realScreenWidth/50)*2 + 'px';
            allDivSD.style.padding = `${realScreenWidth / 50}px`;
            if (ulSDRef.current) {
                const ulSD = ulSDRef.current;
                ulSD.style.gap = realScreenWidth / 50 + 'px';
            };
            if (nothPRef.current) { 
                const nothP = nothPRef.current;
                nothP.style.fontSize = realScreenWidth / 42 + 'px';
            };
        }
    });
    return (
        <div ref={allDivSDRef} className={[css.allDivSD, 'allDivSD'].join(' ')}>
            {drugsSh.length > 0 ? (
            <ul ref={ulSDRef} className={[css.ulSD, 'ulSD'].join(' ')}>
                {drugsSh.map(d => <SevDr key={d.id} drug={d}/>)}
            </ul>
            ) : (
                    <p ref={nothPRef}>{message}</p>
            )}
        </div>
    )
};