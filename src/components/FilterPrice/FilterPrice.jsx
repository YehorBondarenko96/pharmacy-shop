import css from './FilterPrice.module.css';
import { DropListPrice } from '../DropListPrice/DropListPrice';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFilterPrice } from '../../redux/selectors';

export const FilterPrice = () => {
    const allFiltAlfRef = useRef(null);
    const secAllDivRef = useRef(null);
    const allButtonFARef = useRef(null);
    const divDrLRef = useRef(null);
    const divArrowRef = useRef(null);

    const [drListOn, setDrListOn] = useState(false);

    const l = 'L to H';
    const h = 'H to L';

    const [filVal, setFilVal] = useState(l);

    const selPr = useSelector(selectFilterPrice);

    useEffect(() => {
        if (allButtonFARef.current) {
            switch (selPr) {
                case "l":
                    setFilVal(l);
                    allButtonFARef.current.classList.add(css.allButtonFAAct);
                    break;
                case "h":
                    setFilVal(h);
                    allButtonFARef.current.classList.add(css.allButtonFAAct);
                    break;
                default:
                    setFilVal(l);
                    allButtonFARef.current.classList.remove(css.allButtonFAAct);

    };
        }
    }, [selPr]);

    useEffect(() => {
        if (allFiltAlfRef.current && secAllDivRef.current && allButtonFARef.current &&
            divArrowRef.current && divDrLRef.current) {
            const realScreenWidth = window.innerWidth;
            const allFiltAlf = allFiltAlfRef.current;
            const secAllDiv = secAllDivRef.current;
            const allButtonFA = allButtonFARef.current;
            const divArrow = divArrowRef.current;
            const divDrL = divDrLRef.current;

            allFiltAlf.style.height = realScreenWidth / 24 + 'px';
            allFiltAlf.style.width = realScreenWidth / 10 + 'px';
            secAllDiv.style.height = realScreenWidth / 5 + 'px';
            secAllDiv.style.width = realScreenWidth / 9.1 + 'px';
            allButtonFA.style.fontSize = realScreenWidth / 71 + 'px';
            allButtonFA.style.width = realScreenWidth / 10 + 'px';
            allButtonFA.style.height = realScreenWidth / 24 + 'px';
            allButtonFA.style.gap = realScreenWidth / 66.67 + 'px';
            allButtonFA.style.paddingLeft = realScreenWidth / 200 + 'px';
            allButtonFA.style.borderRadius = realScreenWidth / 100 + 'px';
            divArrow.style.height = realScreenWidth / 50 + 'px';
            divArrow.style.width = realScreenWidth / 50 + 'px';
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
                <button ref={allButtonFARef} className={css.allButtonFA} onClick={clickAllB}>
                    <p>{filVal}</p>
                <div ref={divArrowRef} className={css.divArrow}></div>
            </button>
            <div ref={divDrLRef} className={css.divDrL}>
                <DropListPrice/>
            </div>
            </div>
        </div>
    )
};