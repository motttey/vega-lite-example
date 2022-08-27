import BarChart from '../components/BarChart.js';
import HorizonChart from '../components/HorizonChart.js';
import React from 'react';
import QuantileDotPlot from '../components/QuantileDotPlot.js';
import LayerdChart from '../components/LayerdChart.js';

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
            <QuantileDotPlot
                width={width}
                height={height/2}
            />
            <LayerdChart
                width={width}
                height={height/2}
            />
        </div>
    );
}

export default HomePage;
