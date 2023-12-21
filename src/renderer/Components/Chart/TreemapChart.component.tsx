/* eslint-disable prefer-template */
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';

export default function TreemapChart(diskData: any) {
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

  return <ReactEcharts option={option} />;
}
