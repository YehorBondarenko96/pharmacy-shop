import { Filter } from "../Filter/Filter";
import { FilterAlf } from "../FilterAlf/FilterAlf";
import css from './Filters.module.css';

export const Filters = () => {
    return (
        <div className={css.allFilters}>
            <Filter />
            <FilterAlf/>
        </div>
    )
};