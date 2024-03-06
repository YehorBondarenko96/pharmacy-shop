import { Filter } from "../Filter/Filter";
import { FilterAlf } from "../FilterAlf/FilterAlf";
import { FilterPrice } from "../FilterPrice/FilterPrice";
import { FilterDate } from "../FilterDate/FilterDate";
import css from './Filters.module.css';
import { useRef, useEffect } from "react";

export const Filters = () => {
    const allFiltersRef = useRef(null);

    useEffect(() => {
        if (allFiltersRef.current) {
            const realScreenWidth = window.innerWidth;
            const allFilters = allFiltersRef.current;
            allFilters.style.gap = realScreenWidth/100 + 'px';
        };
    });

    return (
        <div ref={allFiltersRef} className={css.allFilters}>
            <Filter />
            <FilterAlf />
            <FilterPrice />
            <FilterDate />
        </div>
    )
};