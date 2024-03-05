import { useEffect, useRef } from "react";
import css from "./SavedDrugs.module.css";
import { useSelector } from "react-redux";
import { selectDrugsForShop } from "../../redux/selectors";
import { SevDr } from "../SevDr/SevDr";

export const SavedDrugs = ({realScreenHeight}) => {
    const drugsSh = useSelector(selectDrugsForShop);

    const allDivSDRef = useRef(null);
    const ulSDRef = useRef(null);

    useEffect(() => {
        if (allDivSDRef.current && ulSDRef.current) {
            const realScreenWidth = window.innerWidth;
            const allDivSD = allDivSDRef.current;
            const ulSD = ulSDRef.current;
            allDivSD.style.height = realScreenHeight - realScreenHeight/2.5 + 'px';
            allDivSD.style.width = (realScreenWidth - 40 - realScreenWidth / 50) / 2 - (realScreenWidth/50)*2 + 'px';
            ulSD.style.gap = realScreenWidth / 50 + 'px';
            allDivSD.style.padding = `${realScreenWidth/50}px`;
        }
    });
    return (
        <div ref={allDivSDRef} className={[css.allDivSD, 'allDivSD'].join(' ')}>
            <ul ref={ulSDRef} className={[css.ulSD, 'ulSD'].join(' ')}>
                {drugsSh.map(d => <SevDr key={d.id} drug={d}/>)}
            </ul>
        </div>
    )
};