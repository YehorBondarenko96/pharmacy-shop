import { Navigation } from "components/Navigation/Navigation";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import css from "./SharedLayout.module.css";

export const SharedLayout = () => {
    return (
        <div className={css.allDiv}>
            <header>
                <Navigation/>
            </header>
            <main>
                <Suspense fallback={null}>
                    <Outlet />
                </Suspense>
            </main>
        </div>
    )
};