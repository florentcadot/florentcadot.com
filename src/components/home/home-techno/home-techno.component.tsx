import { TooltipComponent } from '../../common/tooltip.component.tsx';
import { TechnoCardComponent } from './techno-card.component.tsx';
import { useHomeTechno } from './home-techno.hook.tsx';

export const HomeTechnoComponent = () => {
  const { frondEndRows, backEndRows, databaseRows, testingRows, workflowRows } =
    useHomeTechno();

  return (
    <div className="home-techno-container">
      <div className="title-container">
        <p className="title">Tech Stack </p>
      </div>

      <div className="home-techno-content">
        <div className="home-techno-item-wrapper">
          <TechnoCardComponent title={'Front-end'} rows={frondEndRows} />
          <TechnoCardComponent title={'Back-end'} rows={backEndRows} />
          <TechnoCardComponent title={'Database'} rows={databaseRows} />
        </div>

        <div className="home-techno-item-wrapper">
          <TechnoCardComponent
            title={'Testing'}
            rows={testingRows}
            endingElement={<p>TDD friendly</p>}
          />

          <TechnoCardComponent
            title={'Workflow'}
            rows={workflowRows}
            endingElement={<p>Clean architecture</p>}
          />
        </div>
      </div>

      <TooltipComponent />
    </div>
  );
};
