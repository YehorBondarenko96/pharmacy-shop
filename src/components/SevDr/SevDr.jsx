import css from "./SevDr.module.css";
import { useEffect, useRef } from "react";
import { addFavoriteDrugs, delFavoriteDrugs } from "../../redux/drugsLSSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteDrugs } from "../../redux/selectors";


export const SevDr = ({ drug }) => {
    const dispatch = useDispatch();
    const favDr = useSelector(selectFavoriteDrugs);
    
    const isFav = favDr.includes(drug.id);

    const liSevDrRef = useRef(null);
    const addToBackedButRef = useRef(null);
    const drugDivRef = useRef(null);
    const divAddToBackedButRef = useRef(null);
    const favoriteRef = useRef(null);
    const infoDrugRef = useRef(null);
    const drugImgRef = useRef(null);

    const addFavDr = (id) => {
        dispatch(addFavoriteDrugs(id));
    };

    const delFavDr = (id) => {
        dispatch(delFavoriteDrugs(id));
    };

    const addOrDel = (id) => {
        if (isFav) {
            delFavDr(id)
        } else {
            addFavDr(id)
        }
    };

    useEffect(() => {
        if(liSevDrRef.current){}
    });
    return (
        <li ref={liSevDrRef} className={css.liSevDr}>
            <div ref={drugDivRef} className={css.drugDiv}>
            <button ref={favoriteRef} className={css.favoriteBut} onClick={() => addOrDel(drug.id)}></button>
            <img ref={drugImgRef} className={css.drugImg} src={drug.image} alt={drug.name} />
            <div ref={infoDrugRef} className={css.infoDrug}>
                <p className={css.pInfoDrug}><b>{drug.name}</b></p>
                <p className={css.pInfoDrug}><b>Price: </b>{drug.price} &#8372;</p>
                <p className={css.pInfoDrug}><b>Manufacturing date:</b> {drug.dataWasAdded}</p>
            </div>
            </div>
        </li>
    )
};