import { useDispatch } from "react-redux";
import { fetchDrugs, fetchPharmacies } from "../../redux/opertions";
import { PharmaciesList } from "../PharmaciesList/PharmaciesList";
import { DrugsList } from "../DrugsList/DrugsList";
import css from "./Shop.module.css";
import { Filters } from "../Filters/Filters";


const Shop = () => {
    const dispatch = useDispatch();

    dispatch(fetchDrugs());
    dispatch(fetchPharmacies());

    const realScreenHeight = window.innerHeight;

    return (
        <>
            <Filters/>
            <div className={css.allShopDiv}>
                <PharmaciesList realScreenHeight={realScreenHeight}/>
                <DrugsList realScreenHeight={realScreenHeight}/>
            </div>
        </>
    )
};

export default Shop;