import React from 'react';
import Chart from './Chart.js';
import PropTypes from 'prop-types';

ConnectedScatterPlot.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number
}

function ConnectedScatterPlot (props) {
    const getData = () => {
        const data = []
        let x = 10;
        let y = 25;
        for (let i = 1900; i < 2000; i++) {
            x = x + 2 * (Math.random() -  0.5)
            y = y + 5 * (Math.random() -  0.5)
            data.push({ year: i, x: x, y: y })
        }
        return {
            values: data
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
            "encoding": {
                "x": {
                    "field": "miles", 
                    "type": "linear",
                    "scale": {"zero": false},
                    "range": "width"
                },
                "y": {
                    "field": "gas", 
                    "type": "linear",
                    "scale": {"zero": false},
                    "range": "height"
                },
                "order": {"field": "year"}
            }
        }
    }

    const data = getData()

    return (
        <Chart
            componentName="connectedscatterplot"
            json={getConnectedScatterPlot(
                data,
                props.width,
                props.height
            )}
        />
    )
}

export default ConnectedScatterPlot