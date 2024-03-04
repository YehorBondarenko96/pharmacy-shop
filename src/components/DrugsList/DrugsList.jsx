import { useSelector } from "react-redux";
import { selectDrugs, selectFavoriteDrugs, selectFilter, selectFilterAlf } from "../../redux/selectors";
import css from "./DrugsList.module.css";
import { Drug } from "../Drug/Drug";
import { useEffect, useRef, useState } from "react";

export const DrugsList = ({realScreenHeight}) => {
    const allDrugs = useSelector(selectDrugs); 
    const fevDrugsId = useSelector(selectFavoriteDrugs);
    const filter = useSelector(selectFilter);
    const selAlf = useSelector(selectFilterAlf);

    const [drugs, setDrugs] = useState(allDrugs);
    const [fevDrRend, setFevDrRend] = useState([]);
    const [notFvDrRend, setNotFvDrRend] = useState([]);

    const fevDrugsIdRef = useRef(fevDrugsId);

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
        if (pasDrugs.length > 0) {
            switch (selAlf) {
        case "a":
            // const drA = [...pasDrugs];
                pasDrugs.sort((a, b) => {
                return a.name.localeCompare(b.name);
            });
            // setDrugs(drA);
                break;
            case "z":
            // const drZ = [...allDrugs];
                pasDrugs.sort((a, b) => {
                return b.name.localeCompare(a.name);
            });
            // setDrugs(drZ);
                break;
            default:
                // setDrugs(allDrugs);
                pasDrugs = allDrugs;
        };


        if (filter.length > 0) {
            setDrugs(pasDrugs.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase())));
        }
        else {
            setDrugs(pasDrugs);
        };
        }
    }, [filter, allDrugs, selAlf]);
    
    useEffect(() => {
        if (fevDrugsIdRef.current.length > 0) {
            setFevDrRend(drugs.filter(d => fevDrugsIdRef.current.includes(d.id)));
            setNotFvDrRend(drugs.filter(d => !fevDrugsIdRef.current.includes(d.id)));
        }
    }, [drugs, filter, allDrugs, selAlf]);

    const allDrugsListDivRef = useRef(null);
    const drugsUlRef = useRef(null);

    useEffect(() => {
        if (allDrugsListDivRef.current && drugsUlRef.current) {
            const realScreenWidth = window.innerWidth;
            const allDrugsListDiv = allDrugsListDivRef.current;
            const drugsUl = drugsUlRef.current;
            allDrugsListDiv.style.height = `${realScreenHeight - 200}px`;
            allDrugsListDiv.style.margin = `0 0 0 ${realScreenWidth / 72}px`;
            drugsUl.style.width = `${allDrugsListDiv.clientWidth - (realScreenWidth / 48) * 2}px`;
            drugsUl.style.padding = `${realScreenWidth / 72}px ${realScreenWidth / 48}px`;
            drugsUl.style.gap = `${realScreenWidth / 72}px ${realScreenWidth / 29}px`;
        }
    })

    return (
    <div ref={allDrugsListDivRef} className={css.allDrugsListDiv}>
            {drugs.length > 0 ? (fevDrRend.length > 0 ? (
                <>
                <ul ref={drugsUlRef} className={[css.drugsUl, 'drugsUl'].join(' ')}>
                        {fevDrRend.map(dr => (<Drug key={dr.id} drug={dr} />))}
                        {notFvDrRend.map(dr => (<Drug key={dr.id} drug={dr}/>))}
                        
                </ul>
                </>
            ): (
                <>
                <ul ref={drugsUlRef} className={[css.drugsUl, 'drugsUl'].join(' ')}>
                        {drugs.map(dr => (<Drug key={dr.id} drug={dr}/>))}
                </ul>
                </>
        )
        ) : (
            <p>No drugs found</p>
        )}
    </div>
)
};