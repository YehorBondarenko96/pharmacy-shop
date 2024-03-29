import { Navigation } from "components/Navigation/Navigation";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import css from "./SharedLayout.module.css";
import { useDispatch } from "react-redux";
import { setScreenOrientation } from "../../redux/drugsLSSlice";
import { useEffect } from "react";
import useResizeAware from "react-resize-aware";

export const SharedLayout = () => {
    // const dispatch = useDispatch();

    // const handleResize = () => {
    //         const screenWidth = window.innerWidth;
    //         const screenHeight = window.innerHeight;
    //         dispatch(setScreenOrientation({screenWidth, screenHeight}));
    // };
    
    // useEffect(() => {
    //     handleResize();
    //     window.addEventListener('resize', handleResize);
    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // });


    const dispatch = useDispatch();

    const [resizeListener, sizes] = useResizeAware();

    useEffect(() => {
        if (sizes) {
            dispatch(setScreenOrientation({ screenWidth: sizes.width, screenHeight: sizes.height }));
        }
    });


    return (
        <div className={css.allDiv}>
            {resizeListener}
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

// import React, { useEffect } from "react";
// import { Navigation } from "components/Navigation/Navigation";
// import { Outlet } from "react-router-dom";
// import css from "./SharedLayout.module.css";
// import { useDispatch } from "react-redux";
// import { setScreenOrientation } from "../../redux/drugsLSSlice";
// import useResizeAware from "react-resize-aware";

// export const SharedLayout = () => {
//     const dispatch = useDispatch();

//     const [resizeListener, sizes] = useResizeAware();

//     useEffect(() => {
//         if (sizes) {
//             console.log(sizes);
//             dispatch(setScreenOrientation({ screenWidth: sizes.width, screenHeight: sizes.height }));
//         }
//     });

//     return (
//         <div className={css.allDiv}>
//             {resizeListener}
//                 <header>
//                     <Navigation />
//                 </header>
//                 <main>
//                     <Outlet />
//                 </main>
//             </div>
//     );
// };
