/* eslint-disable react/no-unused-prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO: Delete this eslint-disables
import ReactFlow, {
  Background,
  BackgroundVariant,
  ConnectionMode,
  Node,
} from 'reactflow';
import { UserActionHandlers } from '../../hooks/userActionHandlers.hook';
import { ScannerContainer } from './Home.styles';
import TreemapChart from '../../Components/Chart/TreemapChart.component';

export type HomeProps = {
  userActionHandlers: UserActionHandlers;
};

export const diskData: string = `{
  "value": 43,
  "name": ".tmpiEtJbP",
  "path": "C:\\Users\\user\\AppData\\Local\\Temp\\.tmpiEtJbP",
  "children": [
      {
          "value": 27,
          "name": "subfolder1",
          "path": "C:\\Users\\user\\AppData\\Local\\Temp\\.tmpiEtJbP",
          "children": []
      },
      {
          "value": 16,
          "name": "subfolder2",
          "path": "C:\\Users\\user\\AppData\\Local\\Temp\\.tmpiEtJbP",
          "children": []
      }
  ]
}`;

export const nodes: Node[] = [
  {
    id: 'echarts-node',
    type: 'treemapChart',
    data: {
      diskData, // TODO: change it to get directory map
      width: 300,
      height: 200,
    },
    position: { x: 250, y: 5 },
  },
];

export const nodeTypes = {
  treemapChart: TreemapChart,
};

export default function Home(props: HomeProps) {
  return (
    <ScannerContainer>
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        defaultViewport={{ x: 55, y: 20, zoom: 0.5 }}
        connectionMode={ConnectionMode.Loose}
        proOptions={{ hideAttribution: true }}
      >
        {/* <TreemapChart diskData={diskData} /> */}
        <Background variant={BackgroundVariant.Dots} size={2} />
      </ReactFlow>
    </ScannerContainer>
  );
}
