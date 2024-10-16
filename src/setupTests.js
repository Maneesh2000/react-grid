import React, { useEffect, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

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
      <div key="a" style={{ backgroundColor: "red", padding: "10px", border: "1px solid black", boxSizing: "border-box" }}>
        <span>Item 1 (A)</span>
      </div>
      <div key="b" style={{ backgroundColor: "green", padding: "10px", border: "1px solid black", boxSizing: "border-box" }}>
        <span>Item 2 (B)</span>
      </div>
      <div key="c" style={{ backgroundColor: "blue", padding: "10px", border: "1px solid black", boxSizing: "border-box" }}>
        <span>Item 3 (C)</span>
      </div>
    </ResponsiveGridLayout>
  );
};

export default MyResponsiveGrid;
