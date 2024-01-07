/* eslint-disable prefer-template */
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { NodeProps } from 'reactflow';

// interface ChartProps extends NodeProps {
//   diskData?: string;
// }

export type ChartProps = {
  diskData: string;
};

export default function TreemapChart(prop: NodeProps<ChartProps>) {
  const diskData = prop?.data.diskData ?? null;

  const formatUtil = echarts.format;
  function getLevelOption() {
    return [
      {
        itemStyle: {
          borderWidth: 0,
          gapWidth: 5,
        },
      },
      {
        itemStyle: {
          gapWidth: 1,
        },
      },
      {
        colorSaturation: [0.35, 0.5],
        itemStyle: {
          gapWidth: 1,
          borderColorSaturation: 0.6,
        },
      },
    ];
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const option = {
    title: {
      text: 'Disk Usage',
      left: 'center',
    },

    tooltip: {
      formatter(info: any) {
        const { value, treePathInfo } = info;
        const treePath = [];

        // eslint-disable-next-line no-plusplus
        for (let i = 1; i < treePathInfo.length; i++) {
          treePath.push(treePathInfo[i].name);
        }

        return [
          '<div class="tooltip-title">' +
            formatUtil.encodeHTML(treePath.join('/')) +
            '</div>',
          'Disk Usage: ' + formatUtil.addCommas(value) + ' KB',
        ].join('');
      },
    },

    series: [
      {
        name: 'Disk Usage',
        type: 'treemap',
        visibleMin: 300,
        label: {
          show: true,
          formatter: '{b}',
        },
        itemStyle: {
          borderColor: '#fff',
        },
        levels: getLevelOption(),
        data: diskData,
      },
    ],
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const option2 = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
      },
    ],
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dataObject = `[{
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
  }]`;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dataObject2 = [
    {
      value: 43,
      name: '.tmpiEtJbP',
      path: 'C:\\Users\\user\\AppData\\Local\\Temp\\.tmpiEtJbP',
      children: [
        {
          value: 27,
          name: 'subfolder1',
          path: 'C:\\Users\\user\\AppData\\Local\\Temp\\.tmpiEtJbP',
          children: [],
        },
        {
          value: 16,
          name: 'subfolder2',
          path: 'C:\\Users\\user\\AppData\\Local\\Temp\\.tmpiEtJbP',
          children: [],
        },
      ],
    },
  ];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const option3 = {
    series: [
      {
        data: dataObject2,
        type: 'treemap',
      },
    ],
  };

  return <ReactEcharts option={option3} />;
}
