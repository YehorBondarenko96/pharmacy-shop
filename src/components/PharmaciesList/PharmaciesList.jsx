import { useSelector } from "react-redux";
import { selectPharmacies } from "../../redux/selectors";
import css from "./PharmaciesList.module.css";
import { Pharmacy } from "../Pharmacy/Pharmacy";
import { useRef, useEffect } from "react";

export const PharmaciesList = ({realScreenHeight}) => {
    const pharmacies = useSelector(selectPharmacies); 

    const allPharmaciesListDivRef = useRef(null);
    const pharmaciesHlllRef = useRef(null);
    const pharmaciesUlRef = useRef(null);

    useEffect(() => {
        if (allPharmaciesListDivRef.current && pharmaciesHlllRef.current && pharmaciesUlRef.current) {
            const realScreenWidth = window.innerWidth;
            const allPharmaciesListDiv = allPharmaciesListDivRef.current;
            const pharmaciesHlll = pharmaciesHlllRef.current; 
            const pharmaciesUl = pharmaciesUlRef.current;
            allPharmaciesListDiv.style.height = `${realScreenHeight - 200}px`;
            pharmaciesHlll.style.margin = `${realScreenWidth / 72}px 0 0 0`;
            pharmaciesHlll.style.fontSize = `${realScreenWidth / 80}px`;
            pharmaciesUl.style.padding = `${realScreenWidth / 72}px ${realScreenWidth / 48}px`;
            pharmaciesUl.style.gap = `${realScreenWidth/72}px`;
        }
    });

    return (
    <div ref={allPharmaciesListDivRef} className={css.allPharmaciesListDiv}>
        {pharmacies.length > 0 ? (
                <>
                    <h3 ref={pharmaciesHlllRef} className={css.pharmaciesHlll}>Pharmacies</h3>
                <ul ref={pharmaciesUlRef} className={css.pharmaciesUl}>
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