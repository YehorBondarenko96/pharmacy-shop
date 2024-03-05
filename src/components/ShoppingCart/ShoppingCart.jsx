import css from "./ShoppingCart.module.css";
import { DataUserForm } from "../DataUserForm/DataUserForm";
import { SavedDrugs } from "../SavedDrugs/SavedDrugs";
import { useEffect, useRef } from "react";

const ShoppingCart = () => {
    const realScreenHeight = window.innerHeight;

    const divDataUsSavDrRef = useRef(null);
    const divTotButShCRef = useRef(null);
    const buttonShCFormRef = useRef(null);
    const divSvgBShCRef = useRef(null);
    const totShCRef = useRef(null);

    useEffect(() => {
        if (divDataUsSavDrRef.current&& divTotButShCRef.current && buttonShCFormRef.current &&
            divSvgBShCRef.current && totShCRef.current) {
            const realScreenWidth = window.innerWidth;
            const divDataUsSavDr = divDataUsSavDrRef.current;
            const divTotButShC = divTotButShCRef.current;
            const buttonShCForm = buttonShCFormRef.current;
            const divSvgBShC = divSvgBShCRef.current;
            const totShC = totShCRef.current;
            divDataUsSavDr.style.gap = realScreenWidth / 50 + 'px';
            divTotButShC.style.gap = realScreenWidth / 10 + 'px';
            divTotButShC.style.paddingTop = realScreenWidth / 100 + 'px';
            buttonShCForm.style.width = realScreenWidth / 6.67 + 'px';
            buttonShCForm.style.borderRadius = realScreenWidth/66.67 + 'px';
            buttonShCForm.style.fontSize = realScreenWidth/55.556 + 'px';
            buttonShCForm.style.gap = realScreenWidth/66.67 + 'px';
            divSvgBShC.style.width = realScreenWidth / 33.33 + 'px';
            divSvgBShC.style.height = realScreenWidth / 33.33 + 'px';
            totShC.style.fontSize = realScreenWidth/41.667 + 'px';

        }
    });

    return (
        <>
            <form className={css.formShC}>
                <div ref={divDataUsSavDrRef} className={css.divDataUsSavDr}>
                    <DataUserForm realScreenHeight={realScreenHeight}/>
                    <SavedDrugs realScreenHeight={realScreenHeight}/>
                </div>
                <div ref={divTotButShCRef} className={css.divTotButShC}>
                        <p ref={totShCRef} className={css.totShC}><b>Total price: </b></p>
                <button ref={buttonShCFormRef} className={css.buttonShCForm} type="submit">
                    <p>To buy</p>
                    <div ref={divSvgBShCRef} className={css.divSvgBShC}></div>
                </button>
                </div>
            </form>
        </>
    )
};

export default ShoppingCart;