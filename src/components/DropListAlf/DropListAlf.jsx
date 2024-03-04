import css from "./DropListAlf.module.css";
import { setAlf } from "../../redux/filterSlice";
import { useDispatch } from "react-redux";

export const DropListAlf = () => {
    const disp = useDispatch();
    const a = "a";
    const n = "n";
    const z = "z";

    const setState = (l) => {
        disp(setAlf(l));
    };

    return (
        <ul className={css.ulDrL}>
            <li>
                <button className={[css.buttonFA, css.firstChild].join(" ")} onClick={() => {setState(a)}}>
                    <p>A to Z</p>
                <div className={css.divArrow}></div>
                </button>
            </li>
            <li>
                <button className={css.buttonFA} onClick={() => {setState(z)}}>
                    <p>Z to A</p>
                <div className={css.divArrow}></div>
                </button>
            </li>
            <li>
                <button className={[css.buttonFA, css.lastChild].join(" ")} onClick={() => {setState(n)}}>
                    <p>Reset</p>
                <div className={css.divArrow}></div>
                </button>
            </li>
        </ul>
    )
};