import { useEffect, useRef } from "react";
import css from "./SavedDrugs.module.css";
import { useSelector } from "react-redux";
import { selectDrugsForShop } from "../../redux/selectors";
import { SevDr } from "../SevDr/SevDr";

export const SavedDrugs = ({realScreenHeight}) => {
    const allDivSDRef = useRef(null);
    const drugsSh = useSelector(selectDrugsForShop);

    useEffect(() => {
        if (allDivSDRef.current) {
            const realScreenWidth = window.innerWidth;
            const allDivSD = allDivSDRef.current;
            allDivSD.style.height = realScreenHeight - 230 + 'px';
            allDivSD.style.width = (realScreenWidth - 40 - realScreenWidth / 50)/2 + 'px';
        }
    });
    return (
        <div ref={allDivSDRef} className={css.allDivSD}>
            <ul className={css.ulSD}>
                {drugsSh.map(d => <SevDr key={d.id} drug={d}/>)}
            </ul>
        </div>
    )
};