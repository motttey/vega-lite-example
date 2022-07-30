import BarChart from '../components/BarChart.js';
import ConnectedScatterPlot from '../components/ConnectedScatterPlot.js';
import HorizonChart from '../components/HorizonChart.js';
import React from 'react';
import QuantileDotPlot from '../components/QuantileDotPlot.js';

function HomePage() {
  const width = 800;
  const height = 500;

  return (
    <div>
      <BarChart
        width={width}
        height={height}
      />
      <HorizonChart
        width={width}
        height={height/2}
      />
      <ConnectedScatterPlot
        width={width}
        height={height/2}
      />
      <QuantileDotPlot
        width={width}
        height={height/2}
      />
    </div>
  );
}

export default HomePage;
