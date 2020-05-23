import React from 'react';
import StatsReadme from '!!raw-loader!../../../../vx-stats/Readme.md';
import BoxPlot from '../../../../vx-stats/src/BoxPlot';
import ViolinPlot from '../../../../vx-stats/src/ViolinPlot';
import DocPage from '../../components/DocPage';
import { DocGenInfo } from '../../types';

const components = [BoxPlot, ViolinPlot].map(
  component =>
    // @ts-ignore
    component.__docgenInfo,
) as DocGenInfo[];

export default () => <DocPage components={components} readme={StatsReadme} vxPackage="stats" />;