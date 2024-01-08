/* eslint-disable prefer-template */
import * as echarts from 'echarts';
import { FolderHierarchy } from '../../../shared/Scanner/FolderHierarchy';
import { Treemap } from './TreemapChart.styles';

export type ChartProps = {
  diskData: string;
};

const parseDiskData = (data: string): FolderHierarchy | undefined => {
  const parsedData = JSON.parse(data) as FolderHierarchy;
  if (parsedData) {
    return parsedData as FolderHierarchy;
  }
  return undefined;
};

const getLevelOption = () => {
  return [
    {
      itemStyle: {
        borderColor: '#777',
        borderWidth: 0,
        gapWidth: 1,
      },
      upperLabel: {
        show: false,
      },
    },
    {
      itemStyle: {
        borderColor: '#555',
        borderWidth: 5,
        gapWidth: 1,
      },
      emphasis: {
        itemStyle: {
          borderColor: '#ddd',
        },
      },
    },
    {
      colorSaturation: [0.35, 0.5],
      itemStyle: {
        borderWidth: 5,
        gapWidth: 1,
        borderColorSaturation: 0.6,
      },
    },
  ];
};

const getToolTipFormatter = () => {
  return (info: any) => {
    const { value, treePathInfo } = info;
    const treePath = [];

    for (let i = 1; i < treePathInfo.length; i += 1) {
      treePath.push(treePathInfo[i].name);
    }

    return [
      '<div class="tooltip-title">' +
        echarts.format.encodeHTML(treePath.join('/')) +
        '</div>',
      'Disk Usage: ' + echarts.format.addCommas(value) + ' KB',
    ].join('');
  };
};

export default function TreemapChart(prop: ChartProps) {
  // const diskData = prop?.data.diskData ?? null;
  const { diskData } = prop;

  const option = {
    title: {
      text: 'Disk Usage',
      left: 'center',
    },
    tooltip: {
      formatter: getToolTipFormatter(),
    },
    dataZoom: {
      start: 100,
    },
    series: [
      {
        name: 'Disk Usage',
        type: 'treemap',
        visibleMin: 100,
        leafDepth: 2,
        label: {
          show: true,
          formatter: '{b}',
          fontSize: 25,
        },
        upperLabel: {
          show: true,
          height: 60,
          fontSize: 30,
        },
        itemStyle: {
          borderColor: '#fff',
        },
        levels: getLevelOption(),
        data: [parseDiskData(diskData)],
        responsive: true,
        maintainAspectRatio: false,
      },
    ],
  };

  return <Treemap option={option} style={{ height: '100%' }} />;
}
