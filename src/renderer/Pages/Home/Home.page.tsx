/* eslint-disable react/no-unused-prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO: Delete this eslint-disables
import ReactFlow, { Background, BackgroundVariant, Node } from 'reactflow';
import { UserActionHandlers } from '../../hooks/userActionHandlers.hook';
import { ChartContainer, Reactflow, ScannerContainer } from './Home.styles';
import TreemapChart from '../../Components/Chart/TreemapChart.component';

export type HomeProps = {
  userActionHandlers: UserActionHandlers;
};

export const diskData: string = `{
  "value": 43,
  "name": ".tmpiEtJbP",
  "path": "C:\\\\Users\\\\user\\\\AppData\\\\Local\\\\Temp\\\\.tmpiEtJbP",
  "children": [
      {
          "value": 27,
          "name": "subfolder1",
          "path": "C:\\\\Users\\\\user\\\\AppData\\\\Local\\\\Temp\\\\.tmpiEtJbP",
          "children": [
            {
              "value": 13,
              "name": "subsubfolder1",
              "path": "C:\\\\Users\\\\user\\\\AppData\\\\Local\\\\Temp\\\\.tmpiEtJbP\\\\subfolder1",
              "children": []
            },
            {
              "value": 4,
              "name": "subsubfolder2",
              "path": "C:\\\\Users\\\\user\\\\AppData\\\\Local\\\\Temp\\\\.tmpiEtJbP\\\\subfolder1",
              "children": []
            },
            {
              "value": 10,
              "name": "subsubfolder3",
              "path": "C:\\\\Users\\\\user\\\\AppData\\\\Local\\\\Temp\\\\.tmpiEtJbP\\\\subfolder1",
              "children": []
            }
          ]
      },
      {
          "value": 16,
          "name": "subfolder2",
          "path": "C:\\\\Users\\\\user\\\\AppData\\\\Local\\\\Temp\\\\.tmpiEtJbP",
          "children": []
      }
  ]
}`;

export default function Home(props: HomeProps) {
  return (
    <ScannerContainer>
      <TreemapChart diskData={diskData} />
    </ScannerContainer>
  );
}
