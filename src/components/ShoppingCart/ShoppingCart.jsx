import css from "./ShoppingCart.module.css";
import { DataUserForm } from "../DataUserForm/DataUserForm";
import { SavedDrugs } from "../SavedDrugs/SavedDrugs";

const ShoppingCart = () => {
    const realScreenHeight = window.innerHeight;

    return (
        <>
            <form className={css.formShC}>
                <div className={css.divDataUsSavDr}>
                    <DataUserForm realScreenHeight={realScreenHeight}/>
                    <SavedDrugs realScreenHeight={realScreenHeight}/>
                </div>
                <div className={css.divTotButShC}>
                        <p className={css.totShC}><b>Total price: </b></p>
                <button className={css.buttonShCForm} type="submit">
                    <p>To buy</p>
                    <div className={css.divSvgBShC}></div>
                </button>
                </div>
            </form>
        </>
    )
};

export default ShoppingCart;