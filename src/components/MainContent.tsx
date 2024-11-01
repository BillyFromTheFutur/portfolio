import React from "react";

interface WidgetPosition {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface Widget {
  id: string;
  position: WidgetPosition;
  content: React.ReactNode;
}

interface GridLayoutProps {
  widgets: Widget[];
}

const GridLayout = ({ widgets = [] }: GridLayoutProps) => {
  return (
    <div className="w-full h-full overflow-y-auto overflow-x-hidden">
      <div
        className="grid grid-cols-3 gap-2 p-4 auto-rows-[150px]"
        style={{
          minHeight: "100%",
        }}
      >
        {widgets.map((widget) => {
          const { position, content, id } = widget;
          if (position.x < 0 || position.x + position.width > 3) return null;

          return (
            <div
              key={id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              style={{
                gridColumn: `${position.x + 1} / span ${position.width}`,
                gridRow: `${position.y + 1} / span ${position.height}`,
              }}
            >
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const VerticalWidget = ({ index }: { index: number }) => (
  <div className="h-full bg-blue-200 p-4">
    <h2 className="text-lg font-bold">Vertical Widget {index}</h2>
    <p>1x2 Widget</p>
  </div>
);

const HorizontalWidget = ({ index }: { index: number }) => (
  <div className="h-full bg-green-200 p-4">
    <h2 className="text-lg font-bold">Horizontal Widget {index}</h2>
    <p>2x1 Widget</p>
  </div>
);

const SmallWidget = ({ index }: { index: number }) => (
  <div className="h-full bg-yellow-200 p-4">
    <h2 className="text-lg font-bold">Small Widget {index}</h2>
    <p>1x1 Widget</p>
  </div>
);

const LargeWidget = ({ index }: { index: number }) => (
  <div className="h-full bg-purple-200 p-4">
    <h2 className="text-lg font-bold">Large Widget {index}</h2>
    <p>2x2 Widget</p>
  </div>
);

const MainContent = () => {
  const generateWidgets = () => {
    const widgets: Widget[] = [];
    let currentY = 0;

    for (let i = 0; i < 2; i++) {
      widgets.push({
        id: `vertical-${i}`,
        position: { x: 0, y: currentY, width: 1, height: 2 },
        content: <VerticalWidget index={i} />,
      });

      widgets.push({
        id: `horizontal-${i}`,
        position: { x: 1, y: currentY, width: 2, height: 1 },
        content: <HorizontalWidget index={i} />,
      });

      widgets.push({
        id: `large-${i}`,
        position: { x: 1, y: currentY + 1, width: 2, height: 3 },
        content: <LargeWidget index={i} />,
      });

      widgets.push({
        id: `small-${i}`,
        position: { x: 0, y: currentY + 2, width: 1, height: 1 },
        content: <SmallWidget index={i} />,
      });

      currentY += 4; // Modifié ici : changé de 3 à 4 pour tenir compte de la hauteur du LargeWidget
    }

    return widgets;
  };

  const widgets = generateWidgets();

  return (
    <div className="bg-transparent hover:bg-[#fefef3] col-span-2 h-[calc(100vh-130px)] rounded-xl hover:shadow-lg hover:shadow-gray-300 ease-in-out duration-300">
      <GridLayout widgets={widgets} />
    </div>
  );
};

export default MainContent;

/*
 *
 *
  const maxY = widgets.reduce((max, widget) => {
    const bottomPosition = widget.position.y + widget.position.height;
    return Math.max(max, bottomPosition);
  }, 3);
 *
 */
