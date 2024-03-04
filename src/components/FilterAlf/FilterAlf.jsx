import css from './FilterAlf.module.css';
import { DropListAlf } from '../DropListAlf/DropListAlf';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFilterAlf } from '../../redux/selectors';

export const FilterAlf = () => {
    const allButtonFARef = useRef(null);
    const divDrLRef = useRef(null);
    const divArrowRef = useRef(null);
    const [drListOn, setDrListOn] = useState(false);

    const a = 'A to Z';
    const z = 'Z to A';

    const [filVal, setFilVal] = useState(a);

    const selAlf = useSelector(selectFilterAlf);

    useEffect(() => {
        if (allButtonFARef.current) {
            switch (selAlf) {
                case "a":
                    setFilVal(a);
                    allButtonFARef.current.classList.add(css.allButtonFAAct);
                    break;
                case "z":
                    setFilVal(z);
                    allButtonFARef.current.classList.add(css.allButtonFAAct);
                    break;
                default:
                    setFilVal(a);
                    allButtonFARef.current.classList.remove(css.allButtonFAAct);

    };
        }
    }, [selAlf]);

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
        <div className={css.allFiltAlf}>
            <div className={css.secAllDiv}>
                <button ref={allButtonFARef} className={css.allButtonFA} onClick={clickAllB}>
                    <p>{filVal}</p>
                <div ref={divArrowRef} className={css.divArrow}></div>
            </button>
            <div ref={divDrLRef} className={css.divDrL}>
                <DropListAlf/>
            </div>
            </div>
        </div>
    )
};