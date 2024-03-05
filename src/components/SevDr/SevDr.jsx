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
    const drugDivRef = useRef(null);
    const favoriteRef = useRef(null);
    const infoDrugRef = useRef(null);
    const drugImgRef = useRef(null);
    const pNumeDrugRef = useRef(null);

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
        if (liSevDrRef.current && drugDivRef.current && pNumeDrugRef.current &&
            favoriteRef.current && infoDrugRef.current && drugImgRef.current) {
            const realScreenWidth = window.innerWidth;
            const drugLi = liSevDrRef.current;
            const drugDiv = drugDivRef.current;
            const favorite = favoriteRef.current;
            const infoDrug = infoDrugRef.current;
            const drugImg = drugImgRef.current;
            const pNumeDrug = pNumeDrugRef.current;
            const drugsUl = document.querySelector('.allDivSD');
            if (drugsUl) {
                const widthSize = drugsUl.clientWidth;
                drugLi.style.height = `${widthSize/2}px`;
                drugImg.style.width = widthSize / 2 + 'px';
                drugImg.style.height = widthSize/4 + 'px';
            };
            drugDiv.style.fontSize = realScreenWidth / 103 + 'px';
            favorite.style.width = realScreenWidth / 48 + 'px';
            favorite.style.height = realScreenWidth / 48 + 'px';
            favorite.style.right = realScreenWidth/72 + 'px';
            favorite.style.top = realScreenWidth / 72 + 'px';
            infoDrug.style.gap = realScreenWidth / 144 + 'px';
            drugImg.style.margin = realScreenWidth / 100 + 'px';
            pNumeDrug.style.marginTop = realScreenWidth / 25 + 'px';
            pNumeDrug.style.fontSize = realScreenWidth / 50 + 'px';
            if (isFav) {
                favorite.classList.add(css.isFavorite);
            } else {
                favorite.classList.remove(css.isFavorite);
                
            };
        }
    });
    return (
        <li ref={liSevDrRef} className={css.liSevDr}>
            <div ref={drugDivRef} className={css.drugDiv}>
            <button ref={favoriteRef} className={css.favoriteBut} onClick={() => addOrDel(drug.id)}></button>
            <img ref={drugImgRef} className={css.drugImg} src={drug.image} alt={drug.name} />
            <div ref={infoDrugRef} className={css.infoDrug}>
                <p ref={pNumeDrugRef} className={css.pNumeDrug}><b>{drug.name}</b></p>
                <p className={css.pInfoDrug}><b>Price: </b>{drug.price} &#8372;</p>
                <p className={css.pInfoDrug}><b>Manufacturing date:</b> {drug.dataWasAdded}</p>
            </div>
            </div>
        </li>
    )
};