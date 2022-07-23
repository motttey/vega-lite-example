import React from 'react';
import Chart from './Chart.js'

function ConnectedScatterPlot (props) {
    const getData  = () => {
        const data = []
        let x = 10;
        let y = 25;
        for (let i = 1900; i < 2000; i++) {
            x = x + 2 * (Math.random() -  0.5)
            y = y + 5 * (Math.random() -  0.5)
            data.push({ year: 1, x: x, y: y })
        }
        return {
            "name": "line",
            "values": data
        }
    }

    const getConnectedScatterPlot = (
        data, width, height
    ) => {
        return {
            "$schema": "https://vega.github.io/schema/vega/v5.json",
            "data": data,
            "width": width,
            "height": height,
            "mark": {"type": "line", "point": true},
            "encoding": {
                "x": {
                    "field": "x", 
                    "type": "quantitative",
                    "scale": {"zero": false}
                },
                "y": {
                    "field": "y", 
                    "type": "quantitative",
                    "scale": {"zero": false}
                },
                "order": {"field": "year"}
            }
        }
    }

    return (
        <Chart
            componentName="connectedscatterplot"
            json={getConnectedScatterPlot(
                getData(),
                props.width,
                props.height
            )}
        />
    )
}

export default ConnectedScatterPlot