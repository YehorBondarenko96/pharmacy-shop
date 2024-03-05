import css from "./DataUserForm.module.css";
import { useEffect, useRef } from "react";

export const DataUserForm = ({ realScreenHeight }) => {
    const realScreenWidth = window.innerWidth;


    const allDivDUFRef = useRef(null);

    useEffect(() => {
        if (allDivDUFRef.current) {
            const allDivDUF = allDivDUFRef.current;
            allDivDUF.style.height = realScreenHeight - realScreenHeight/2.5 + 'px';
            allDivDUF.style.width = (realScreenWidth - 40 - realScreenWidth / 50) / 2 - (realScreenWidth/50)*2 + 'px';
            allDivDUF.style.padding = `${realScreenWidth/50}px`;
            const labelDUForms = document.querySelectorAll('.labelDUForm');
            const pRegDUForms = document.querySelectorAll('.pRegDUForm');
            if (labelDUForms && pRegDUForms) {
                const coef = 1000 / realScreenWidth;
                const screenWidth = realScreenWidth < 1000 ? realScreenWidth : 1000;
                labelDUForms.forEach(lab => {
                    lab.style.width = screenWidth / (2.86 * coef) + 'px';
                    lab.style.fontSize = (screenWidth > 500) ? screenWidth / 55.56 + 'px' : '9px';
                    lab.style.margin = screenWidth / 65 + 'px';
                    lab.style.marginRight = (screenWidth / 25) * coef + 'px';
                });
                pRegDUForms.forEach(p => {
                    p.style.marginLeft = screenWidth / 100 + 'px';
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
                type="text"
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