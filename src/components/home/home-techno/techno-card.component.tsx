import React from 'react';

interface TechnoItem {
  url?: string;
  image: string;
  tooltipText?: string;
}

interface TechnoCardComponentProps {
  title: string;
  rows: TechnoItem[][];
  endingElement?: React.ReactNode;
}

interface TechnoImageProps {
  image: string;
  tooltipText?: string;
}

const TechnoImage = (props: TechnoImageProps) => {
  return (
    <img
      data-tooltip-id="florent-tooltip"
      data-tooltip-content={props.tooltipText}
      className="techno-image"
      src={props.image}
    />
  );
};

export const TechnoCardComponent = ({
  title,
  rows,
  endingElement,
}: TechnoCardComponentProps) => {
  return (
    <div className="home-techno-item">
      <div className="subtitle">{title}</div>
      <div>
        {rows.map((row, i) => (
          <div key={i} className="home-techno-subItem">
            {row.map((item, j) => (
              <div key={`${i}-${j}`}>
                {item.url ? (
                  <a target="_blank" href={item.url} rel="noreferrer">
                    <TechnoImage
                      image={item.image}
                      tooltipText={item.tooltipText}
                    />
                  </a>
                ) : (
                  <TechnoImage
                    image={item.image}
                    tooltipText={item.tooltipText}
                  />
                )}
              </div>
            ))}
          </div>
        ))}
        {endingElement}
      </div>
    </div>
  );
};
