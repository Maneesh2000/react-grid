import React, { useEffect, useState, Suspense, lazy } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
// import ItemA from "./components/ItemA"
// import ItemB from "./components/ItemB"
// import ItemC from "./components/ItemC"


const ResponsiveGridLayout = WidthProvider(Responsive);

// // Lazily load the components
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const ItemA = lazy(() => delay(0).then(() => import('./components/ItemA')));
const ItemB = lazy(() => delay(0).then(() => import('./components/ItemB')));
const ItemC = lazy(() => delay(0).then(() => import('./components/ItemC')));



const MyResponsiveGrid = () => {
    const [rowHeight, setRowHeight] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const height = window.innerHeight; // Get the viewport height
            setRowHeight(height / 10); // Set row height to 10% of viewport height
        };

        handleResize(); // Set initial height
        window.addEventListener("resize", handleResize); // Update on resize
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const layouts = [
        { i: "a", x: 0, y: 0, w: 12, h: 1, static: false }, // Item 'a'
        { i: "b", x: 0, y: 1, w: 3, h: 7.4 }, // Item 'b' below 'a'
        { i: "c", x: 3, y: 1, w: 9, h: 7.4 }, // Item 'c' beside 'b'
    ];

    return (
        <ResponsiveGridLayout
            className="grid-container"
            layouts={{ lg: layouts }} // Provide layouts for large screens
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 20, sm: 10, xs: 4, xxs: 2 }}
            rowHeight={rowHeight} // Use the calculated row height
            onLayoutChange={(currentLayout) => { console.log(currentLayout); }}
            isDraggable={true} // Enable dragging
            isResizable={true} // Enable resizing
            allowOverlap={false}
        >
            <div key="a">
                <Suspense fallback={<div>Loading Item A...</div>}>
                    <ItemA />
                </Suspense>
            </div>
            <div key="b">
                <Suspense fallback={<div>Loading Item B...</div>}>
                    <ItemB />
                </Suspense>
            </div>
            <div key="c">
                <Suspense fallback={<div>Loading Item C...</div>}>
                    <ItemC />
                </Suspense>
            </div>
        </ResponsiveGridLayout>
    );
};

export default MyResponsiveGrid;
