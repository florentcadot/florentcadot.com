import React from 'react';
import { GroupBox, Tooltip } from 'react95';

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
  const image = <img className="techno-image" src={props.image} />;
  return props.tooltipText ? (
    <Tooltip text={props.tooltipText} position="top" enterDelay={100}>
      {image}
    </Tooltip>
  ) : (
    image
  );
};

export const TechnoCardComponent = ({
  title,
  rows,
  endingElement,
}: TechnoCardComponentProps) => {
  return (
    <GroupBox label={title} className="home-techno-item">
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
    </GroupBox>
  );
};
