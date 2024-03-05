import css from "./DataUserForm.module.css";
import { useEffect, useRef } from "react";

export const DataUserForm = ({ realScreenHeight }) => {
    const realScreenWidth = window.innerWidth;


    const allDivDUFRef = useRef(null);

    useEffect(() => {
        if (allDivDUFRef.current) {
            const allDivDUF = allDivDUFRef.current;
            allDivDUF.style.height = realScreenHeight - 220 + 'px';
            allDivDUF.style.width = (realScreenWidth - 40 - realScreenWidth / 50)/2 + 'px';
            const labelDUForms = document.querySelectorAll('.labelDUForm');
            const pRegDUForms = document.querySelectorAll('.pRegDUForm');
            if (labelDUForms && pRegDUForms) {
                const coef = 1000/realScreenWidth;
                labelDUForms.forEach(lab => {
                    lab.style.width = realScreenWidth / (2.86 * coef) + 'px';
                    lab.style.fontSize = (realScreenWidth > 500) ? realScreenWidth / 55.56 + 'px' : '9px';
                    lab.style.margin = realScreenWidth / 50 + 'px';
                    lab.style.marginRight = (realScreenWidth / 25) * coef + 'px';
                });
                pRegDUForms.forEach(p => {
                    p.style.marginLeft = realScreenWidth / 100 + 'px';
                });
            }
        }
    });
    return (
        <div ref={allDivDUFRef} className={css.allDivDUF}>
            <label className={[css.labelDUForm, 'labelDUForm'].join(' ')}>
                    <span className={[css.pRegDUForm, 'pRegDUForm'].join(' ')}>Name</span>
                <input className={css.inputDUForm} 
                name='name'
                type="text"
                autoComplete="on"
                autoFocus
                placeholder={realScreenWidth > 410 ? ("Please, enter your name"):("Name")} />
            </label>
            <label className={[css.labelDUForm, 'labelDUForm'].join(' ')}>
                    <span className={[css.pRegDUForm, 'pRegDUForm'].join(' ')}>Email</span>
                <input className={css.inputDUForm} 
                name='email'
                type="email"
                autoComplete="off"
                placeholder={realScreenWidth > 410 ? ("Please, enter your email"):("Email")} />
            </label>
            <label className={[css.labelDUForm, 'labelDUForm'].join(' ')}>
                    <span className={[css.pRegDUForm, 'pRegDUForm'].join(' ')}>Phone</span>
                <input className={css.inputDUForm} 
                name='phone'
                type="number"
                autoComplete="off"
                placeholder={realScreenWidth > 410 ? ("Please, enter your phone"):("Phone")} />
            </label>
            <label className={[css.labelDUForm, 'labelDUForm'].join(' ')}>
                    <span className={[css.pRegDUForm, 'pRegDUForm'].join(' ')}>Address</span>
                <input className={css.inputDUForm} 
                name='address'
                type="text"
                autoComplete="off"
                placeholder={realScreenWidth > 410 ? ("Please, enter your address"):("Address")} />
            </label>
        </div>
    )
};