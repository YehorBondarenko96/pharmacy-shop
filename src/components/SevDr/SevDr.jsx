import css from "./SevDr.module.css";
import { useEffect, useRef } from "react";
import { addFavoriteDrugs, delFavoriteDrugs, delDrFShop } from "../../redux/drugsLSSlice";
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
    const inpButSevDrRef = useRef(null);
    const addToBackedButRef = useRef(null);
    const divDelToBackedButRef = useRef(null);
    const divInputRef = useRef(null);
    const inputSavDrRef = useRef(null);
    const plusButRef = useRef(null); 
    const minButRef = useRef(null);

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

    const delDrSh = (d) => {
        dispatch(delDrFShop(d));
    };

    useEffect(() => {
        if (liSevDrRef.current && drugDivRef.current && pNumeDrugRef.current &&
            favoriteRef.current && infoDrugRef.current && drugImgRef.current &&
            inpButSevDrRef.current && addToBackedButRef.current && divDelToBackedButRef.current &&
            inputSavDrRef.current && divInputRef.current && plusButRef.current && minButRef.current) {
            const realScreenWidth = window.innerWidth;
            const drugLi = liSevDrRef.current;
            const drugDiv = drugDivRef.current;
            const favorite = favoriteRef.current;
            const infoDrug = infoDrugRef.current;
            const drugImg = drugImgRef.current;
            const pNumeDrug = pNumeDrugRef.current;
            const inpButSevDr = inpButSevDrRef.current;
            const addToBackedBut = addToBackedButRef.current;
            const divDelToBackedBut = divDelToBackedButRef.current;
            // const divInput = divInputRef.current;
            const inputSavDr = inputSavDrRef.current;
            const plusBut = plusButRef.current;
            const minBut = minButRef.current;
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
            inpButSevDr.style.marginBottom = realScreenWidth / 50 + 'px';
            inputSavDr.style.width = realScreenWidth > 450 ? realScreenWidth / 24 + 'px' : realScreenWidth / 50 + 'px';
            inputSavDr.style.height = realScreenWidth / 24 - 2 + 'px';
            inputSavDr.style.borderRadius = realScreenWidth / 72 + 'px';
            plusBut.style.height = realScreenWidth / 24 + 'px';
            minBut.style.height = realScreenWidth / 24 + 'px';
            plusBut.style.width = realScreenWidth / 50 + 'px';
            minBut.style.width = realScreenWidth / 50 + 'px';
            plusBut.style.fontSize = realScreenWidth / 40 + 'px';
            minBut.style.fontSize = realScreenWidth / 40 + 'px';

            addToBackedBut.style.width = realScreenWidth / 13 + 'px';
            addToBackedBut.style.height = realScreenWidth / 24 + 'px';
            addToBackedBut.style.gap = realScreenWidth/288 + 'px';
            addToBackedBut.style.borderRadius = realScreenWidth/72 + 'px';
            addToBackedBut.style.fontSize = realScreenWidth/80 + 'px';
            addToBackedBut.style.padding = `0 ${realScreenWidth/144}px 0 ${realScreenWidth/96}px`;
            divDelToBackedBut.style.width = realScreenWidth / 48 + 'px';
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
                <div className={css.infInpSevDr}>
                    <div ref={infoDrugRef} className={css.infoDrug}>
                <p ref={pNumeDrugRef} className={css.pNumeDrug}><b>{drug.name}</b></p>
                <p className={css.pInfoDrug}><b>Price: </b>{drug.price} &#8372;</p>
                <p className={css.pInfoDrug}><b>Manufacturing date:</b> {drug.dataWasAdded}</p>
                </div>
                    <div ref={inpButSevDrRef} className={css.inpButSevDr}>
                        <div ref={divInputRef} className={css.divInput}>
                            <button ref={minButRef} className={css.minBut}>
                                <span>-</span>
                            </button>
                            <input
                                ref={inputSavDrRef}
                                className={css.inputSavDr}
                                name='name'
                                type="number"
                            />
                            <button ref={plusButRef} className={css.plusBut}>
                                <span>+</span>
                            </button>
                        </div>
                        <button ref={addToBackedButRef} className={css.addToBackedBut} onClick={() => delDrSh(drug)}>
                <span>Delete</span>
                <div ref={divDelToBackedButRef} className={css.divDelToBackedBut}></div>
            </button>
                </div>
            </div>
            </div>
        </li>
    )
};