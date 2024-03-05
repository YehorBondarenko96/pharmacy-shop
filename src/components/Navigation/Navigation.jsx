import { Link } from "react-router-dom";
import css from './Navigation.module.css';
import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectDrugsForShop } from "../../redux/selectors";

export const Navigation = () => {
    const drugsForShop = useSelector(selectDrugsForShop);
    console.log('drugsForShop: ', drugsForShop);

    const divNavigationRef = useRef(null);
    const divNavShopCartRef = useRef(null);
    const buttonNavShopCartRef = useRef(null);
    const divPLenDrRef = useRef(null);
    const pLenDrRef = useRef(null);

    useEffect(() => {
        if (divNavShopCartRef.current && buttonNavShopCartRef.current &&
            divNavigationRef.current) {
            const realScreenWidth = window.innerWidth;
            const divNavigation = divNavigationRef.current;
            const buttonNavShopCart = buttonNavShopCartRef.current;
            const divNavShopCart = divNavShopCartRef.current;
            divNavigation.style.padding = `${realScreenWidth/144}px 0`;
            buttonNavShopCart.style.height = realScreenWidth / 17 + 'px';
            buttonNavShopCart.style.width = realScreenWidth / 17 + 'px';
            divNavShopCart.style.height = realScreenWidth / 24 + 'px';
            divNavShopCart.style.width = realScreenWidth / 24 + 'px';
            if (divPLenDrRef.current && pLenDrRef.current) {
                const divPLenDr = divPLenDrRef.current;
                const pLenDr = pLenDrRef.current;
                divPLenDr.style.width = realScreenWidth / 35 + 'px';
                divPLenDr.style.height = realScreenWidth / 35 + 'px';
                pLenDr.style.fontSize = realScreenWidth / 58 + 'px';
            }
            
        }
    });
    return(
        <div ref={divNavigationRef} className={css.divNavigation}>
            <nav className={css.navNavigation}>
            <Link to={'/'} className={css.aNavigation}>
                <p className={css.pNavigation}>Shop</p>
                </Link>
                <button ref={buttonNavShopCartRef} className={css.buttonNavShopCart}>
                    <Link to={'/shopping-cart'} className={[css.aNavigation, css.aNavigationSecond].join(" ")}>
                        <div ref={divNavShopCartRef} className={css.divNavShopCart}>
                            <p className={[css.pNavigation, css.pNavShopCart].join(' ')}>Shopping Cart</p>
                            {drugsForShop.length > 0 &&
                                <div ref={divPLenDrRef} className={css.divPLenDr}>
                                <p ref={pLenDrRef} className={css.pLenDr}>
                                    {drugsForShop.length}
                                </p>
                                </div>
                            }
                </div>
            </Link>
                </button>
            </nav>
        </div>
    )
};