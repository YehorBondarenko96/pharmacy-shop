import { useSelector } from "react-redux";
import { selectDrugs, selectPharmacies, selectFavoriteDrugs, selectFilter, selectFilterPharm, selectFilterAlf, selectFilterPrice, selectFilterDate } from "../../redux/selectors";
import css from "./DrugsList.module.css";
import { Drug } from "../Drug/Drug";
import { useEffect, useRef, useState } from "react";

export const DrugsList = ({realScreenHeight}) => {
    const allDrugs = useSelector(selectDrugs); 
    const fevDrugsId = useSelector(selectFavoriteDrugs);
    const filter = useSelector(selectFilter);
    const selAlf = useSelector(selectFilterAlf);
    const selPr = useSelector(selectFilterPrice);
    const selDate = useSelector(selectFilterDate);
    const allPharm = useSelector(selectPharmacies);
    const actId = useSelector(selectFilterPharm);

    const [drugs, setDrugs] = useState(allDrugs);
    const [fevDrRend, setFevDrRend] = useState([]);
    const [notFvDrRend, setNotFvDrRend] = useState([]);

    const fevDrugsIdRef = useRef(fevDrugsId);
    const pNoFoundRef = useRef(null);

    

    // useEffect(() => {
    //     switch (selAlf) {
    //         case "a":
    //             const drA = [...allDrugs];
    //             drA.sort((a, b) => {
    //                 return a.name.localeCompare(b.name);
    //             });
    //             setDrugs(drA);
    //             break;
    //         case "z":
    //             const drZ = [...allDrugs];
    //             drZ.sort((a, b) => {
    //                 return b.name.localeCompare(a.name);
    //             });
    //             setDrugs(drZ);
    //             break;
    //         default:
    //             setDrugs(allDrugs);
    //     }
    // }, [allDrugs, selAlf]);

    useEffect(() => {
        let pasDrugs = [...allDrugs];

        if (actId !== "") {
        const actPh = allPharm.find(p => p.id === actId);
        pasDrugs = [...actPh.available];
    };
        
        if (pasDrugs.length > 0) {
            switch (selAlf) {
            case "a":
                pasDrugs.sort((a, b) => {
                return a.name.localeCompare(b.name);
            });
                break;
            case "z":
                pasDrugs.sort((a, b) => {
                return b.name.localeCompare(a.name);
            });
                break;
                default:
                    break
            };
            
            switch (selPr) {
            case "l":
                pasDrugs.sort((a, b) => parseFloat(a.price.replace(',', '.')) - parseFloat(b.price.replace(',', '.')));
                break;
            case "h":
                pasDrugs.sort((a, b) => parseFloat(b.price.replace(',', '.')) - parseFloat(a.price.replace(',', '.')));
                break;
                default:
                    break
            };

            function parseDate(dateString) {
    const parts = dateString.split('.');
    return new Date(parts[2], parts[1] - 1, parts[0]); 
            };
            
            switch (selDate) {
        case "a":
                pasDrugs.sort((a, b) => parseDate(a.dataWasAdded) - parseDate(b.dataWasAdded));
                break;
            case "z":
                pasDrugs.sort((a, b) => parseDate(b.dataWasAdded) - parseDate(a.dataWasAdded));
                break;
                default:
                    break
        };


        if (filter.length > 0) {
            setDrugs(pasDrugs.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase())));
        }
        else {
            setDrugs(pasDrugs);
        };
        }
    }, [filter, allDrugs, selAlf, selPr, selDate, actId, allPharm]);
    
    useEffect(() => {
        if (fevDrugsIdRef.current.length > 0) {
            setFevDrRend(drugs.filter(d => fevDrugsIdRef.current.includes(d.id)));
            setNotFvDrRend(drugs.filter(d => !fevDrugsIdRef.current.includes(d.id)));
        }
    }, [drugs, filter, allDrugs, selAlf]);

    const allDrugsListDivRef = useRef(null);
    const drugsUlRef = useRef(null);

    useEffect(() => {
            const realScreenWidth = window.innerWidth;
        if (allDrugsListDivRef.current) {
            const allDrugsListDiv = allDrugsListDivRef.current;
            allDrugsListDiv.style.height = `${realScreenHeight - 200}px`;
            allDrugsListDiv.style.margin = `0 0 0 ${realScreenWidth / 72}px`;
        
            if (drugsUlRef.current) {
                const drugsUl = drugsUlRef.current;
                drugsUl.style.width = `${allDrugsListDiv.clientWidth - (realScreenWidth / 48) * 2}px`;
                drugsUl.style.padding = `${realScreenWidth / 72}px ${realScreenWidth / 48}px`;
                drugsUl.style.gap = `${realScreenWidth / 72}px ${realScreenWidth / 29}px`;
            };
        };
        if (pNoFoundRef.current) {
            const pNoFound = pNoFoundRef.current;
            pNoFound.style.fontSize = realScreenWidth/42 + 'px';
        }

    })

    return (
    <div ref={allDrugsListDivRef} className={css.allDrugsListDiv}>
            {drugs.length > 0 ? (fevDrRend.length > 0 ? (
                <>
                <ul ref={drugsUlRef} className={[css.drugsUl, 'drugsUl'].join(' ')}>
                        {fevDrRend.map(dr => (<Drug key={dr.id + (Math.random() * 1000000000)} drug={dr} />))}
                        {notFvDrRend.map(dr => (<Drug key={dr.id + (Math.random() * 1000000000)} drug={dr}/>))}
                        
                </ul>
                </>
            ): (
                <>
                <ul ref={drugsUlRef} className={[css.drugsUl, 'drugsUl'].join(' ')}>
                        {drugs.map(dr => (<Drug key={dr.id + (Math.random() * 1000000000)} drug={dr}/>))}
                </ul>
                </>
        )
        ) : (
            <p ref={pNoFoundRef}>No drugs found</p>
        )}
    </div>
)
};