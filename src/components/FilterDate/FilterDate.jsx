import css from './FilterDate.module.css';
import { DropListDate } from '../DropListDate/DropListDate';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFilterDate, selectScreenWidth } from '../../redux/selectors';

export const FilterDate = () => {
    const allFiltAlfRef = useRef(null);
    const secAllDivRef = useRef(null);
    const allButtonFARef = useRef(null);
    const divDrLRef = useRef(null);
    const divArrowRef = useRef(null);

    const [drListOn, setDrListOn] = useState(false);

    const w = 'N to O';
    const o = 'O to N';

    const [filVal, setFilVal] = useState(w);

    const selDate = useSelector(selectFilterDate);
    const realScreenWidth = useSelector(selectScreenWidth);



    useEffect(() => {
        if (allButtonFARef.current) {
            switch (selDate) {
                case "w":
                    setFilVal(w);
                    allButtonFARef.current.classList.add(css.allButtonFAAct);
                    break;
                case "o":
                    setFilVal(o);
                    allButtonFARef.current.classList.add(css.allButtonFAAct);
                    break;
                default:
                    setFilVal(w);
                    allButtonFARef.current.classList.remove(css.allButtonFAAct);

    };
        }
    }, [selDate]);

    useEffect(() => {
        if (allFiltAlfRef.current && secAllDivRef.current && allButtonFARef.current &&
            divArrowRef.current && divDrLRef.current) {
            const allFiltAlf = allFiltAlfRef.current;
            const secAllDiv = secAllDivRef.current;
            const allButtonFA = allButtonFARef.current;
            const divArrow = divArrowRef.current;
            const divDrL = divDrLRef.current;

            let coef = 1;
            if (realScreenWidth > 1000) { 
                coef = 1.3;
            };

            allFiltAlf.style.height = realScreenWidth / (24 * coef) + 'px';
            allFiltAlf.style.width = realScreenWidth / (10 * coef) + 'px';
            secAllDiv.style.height = realScreenWidth / (5 * coef) + 'px';
            secAllDiv.style.width = realScreenWidth / (9.1 * coef) + 'px';
            allButtonFA.style.fontSize = realScreenWidth / (71 * coef) + 'px';
            allButtonFA.style.width = realScreenWidth / (10 * coef) + 'px';
            allButtonFA.style.height = realScreenWidth / (24 * coef) + 'px';
            allButtonFA.style.gap = realScreenWidth / (66.67 * coef) + 'px';
            allButtonFA.style.paddingLeft = realScreenWidth / 200 + 'px';
            allButtonFA.style.borderRadius = realScreenWidth / 100 + 'px';
            divArrow.style.height = realScreenWidth / (50 * coef) + 'px';
            divArrow.style.width = realScreenWidth / (50 * coef) + 'px';
            divDrL.style.borderRadius = realScreenWidth / 100 + 'px';
        }
    });

    const remCl = () => {
        if (divDrLRef.current && divArrowRef.current) {
            divDrLRef.current.classList.remove(css.divDrLAct);
            divArrowRef.current.classList.remove(css.divArrowAct);
            window.removeEventListener('click', remCl);
            setDrListOn(false);
        }
    };

    const addCl = () => {
        if (divDrLRef.current && divArrowRef.current) {
            setTimeout(() => {
                setDrListOn(true);
                divDrLRef.current.classList.add(css.divDrLAct);
                divArrowRef.current.classList.add(css.divArrowAct);
                window.addEventListener('click', remCl);
            }, 0)
        }
    };

    const clickAllB = () => {
        if (drListOn) {
            remCl();
        } else {
            addCl();
        }
    };

    return (
        <div ref={allFiltAlfRef} className={css.allFiltAlf}>
            <div ref={secAllDivRef} className={css.secAllDiv}>
                <button type="button" ref={allButtonFARef} className={css.allButtonFA} onClick={clickAllB}>
                    <p>{filVal}</p>
                <div ref={divArrowRef} className={css.divArrow}></div>
            </button>
            <div ref={divDrLRef} className={css.divDrL}>
                <DropListDate/>
            </div>
            </div>
        </div>
    )
};