import { useSelector, useDispatch } from "react-redux";
import { selectPharmacies, selectFilterPharm } from "../../redux/selectors";
import css from "./PharmaciesList.module.css";
import { Pharmacy } from "../Pharmacy/Pharmacy";
import { useRef, useEffect } from "react";
import { setPhafm } from "../../redux/filterSlice";

export const PharmaciesList = ({realScreenHeight}) => {
    const pharmacies = useSelector(selectPharmacies); 
    const disp = useDispatch();
    const actId = useSelector(selectFilterPharm);

    const allPharmaciesListDivRef = useRef(null);
    const pharmaciesHlllRef = useRef(null);
    const pharmaciesUlRef = useRef(null);
    const phormasyButtonRef = useRef(null);

    const butCl = () => {
        disp(setPhafm(""));
    }

    useEffect(() => {
        const allIdsPh = pharmacies.map(p => p.id);
        if (allPharmaciesListDivRef.current && pharmaciesHlllRef.current &&
            pharmaciesUlRef.current && phormasyButtonRef.current) {
            const realScreenWidth = window.innerWidth;
            const allPharmaciesListDiv = allPharmaciesListDivRef.current;
            const pharmaciesHlll = pharmaciesHlllRef.current; 
            const pharmaciesUl = pharmaciesUlRef.current;
            allPharmaciesListDiv.style.height = `${realScreenHeight - realScreenHeight/3}px`;
            pharmaciesHlll.style.margin = `${realScreenWidth / 72}px 0 0 0`;
            pharmaciesHlll.style.fontSize = `${realScreenWidth / 80}px`;
            pharmaciesUl.style.padding = `${realScreenWidth / 72}px ${realScreenWidth / 48}px`;
            pharmaciesUl.style.gap = `${realScreenWidth / 72}px`;
            const phormasyButton = phormasyButtonRef.current;
            phormasyButton.style.width = realScreenWidth / 9.6 + 'px';
            phormasyButton.style.height = realScreenWidth / 29 + 'px';
            phormasyButton.style.fontSize = realScreenWidth / 103 + 'px';
            
            if (!allIdsPh.includes(actId)) {
                phormasyButton.classList.add(css.phormasyButtonAct);
            } else {
                phormasyButton.classList.remove(css.phormasyButtonAct);
                
            }
        }
    });

    return (
    <div ref={allPharmaciesListDivRef} className={css.allPharmaciesListDiv}>
        {pharmacies.length > 0 ? (
                <>
                    <h3 ref={pharmaciesHlllRef} className={css.pharmaciesHlll}>Pharmacies</h3>
                    <ul ref={pharmaciesUlRef} className={css.pharmaciesUl}>
                        <li className={css.pharmaciesLi}>
                            <button
            ref={phormasyButtonRef}
            className={css.phormasyButton}
            type="button"
            onClick={butCl}
        >
            All pharmacies
        </button>
                        </li>
                        {pharmacies.map(ph => (
                            <li key={ph.id} className={css.pharmaciesLi}>
                                <Pharmacy pharmacy={ph}/>
            </li>
        ))}
                </ul>
                </>
        ) : (
            <p>No pharmacies found</p>
        )}
    </div>
)
};