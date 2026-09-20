import { TechnoCardComponent } from './techno-card.component.tsx';
import { useHomeTechno } from './home-techno.hook.tsx';
import { Window, WindowContent, WindowHeader } from 'react95';

export const HomeTechnoComponent = () => {
  const {
    frondEndRows,
    backEndRows,
    databaseRows,
    testingRows,
    workflowRows,
    aiRows,
  } = useHomeTechno();

  return (
    <div className="home-techno-container">
      <Window className="section-window">
        <WindowHeader>Tech Stack </WindowHeader>
        <WindowContent>
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

            <TechnoCardComponent title={'AI'} rows={aiRows} />
          </div>
        </WindowContent>
      </Window>
    </div>
  );
};
