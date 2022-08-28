import React from 'react';
import Chart from './Chart.js';
import PropTypes from 'prop-types';

LayerdChart.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number
};

function LayerdChart (props) {
    const getLayerdChart = (
        data, width, height
    ) => {
        return {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "data": data,
            "width": width,
            "height": height,
            "layer": [
                {
                    "mark": "area",
                    "encoding": {
                        "x": {
                            "field": "year",
                            "type": "quantitative",
                        },
                        "y": {
                            "aggregate": "sum",
                            "field": "y",
                            "type": "quantitative",
                            "axis": {
                                "grid": false
                            }
                        },
                        "color": {
                            "field": "type",
                            "scale": {"scheme": "category20b"}
                        }
                    }
                },
                {
                    "mark": "line",
                    "encoding": {
                        "x": {
                            "field": "year",
                            "type": "quantitative",
                        },
                        "y": {
                            "aggregate": "mean",
                            "field": "y",
                            "type": "quantitative",
                            "axis": {
                                "grid": false
                            },
                            "scale": {"zero": false}
                        },
                        "color": {"value": "firebrick"}
                    }
                }
            ],
            "resolve": {"scale": {"y": "independent"}}
        };
    };

    const getData = () => {
        const data = [];
        let x = 10;
        let y = 25;
        for (let i = 1900; i < 2000; i++) {
            x = i;
            ["a", "b"].map((type) => {
                y = y + 5 * (Math.random() -  0.5);
                data.push({ 
                    year: i, 
                    x: x, 
                    y: y,
                    type: type 
                });
            })
        }
        return {
            values: data
        };
    };

    return (
        <Chart
            componentName="horizongraph"
            json={getLayerdChart(
                getData(),
                props.width,
                props.height
            )}
        />
    );
}
export default LayerdChart;
