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
            "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
            "data": data,
            "width": width,
            "height": height,
            "layer": [
                {
                    "mark": "area",
                    "encoding": {
                        "x": {
                            "field": "x",
                            "type": "quantitative",
                        },
                        "y": {
                            "aggregate": "mean",
                            "field": "y",
                            "type": "quantitative",
                            "axis": {
                                "grid": false
                            }
                        }
                    }
                },
                {
                    "mark": "line",
                    "encoding": {
                        "x": {
                            "field": "x",
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

    const data = {
        "values": [
            {"x": 1,  "y": 28}, {"x": 2,  "y": 55},
            {"x": 3,  "y": 43}, {"x": 4,  "y": 91},
            {"x": 5,  "y": 81}, {"x": 6,  "y": 53},
            {"x": 7,  "y": 19}, {"x": 8,  "y": 87},
            {"x": 9,  "y": 52}, {"x": 10, "y": 48},
            {"x": 11, "y": 24}, {"x": 12, "y": 49},
            {"x": 13, "y": 87}, {"x": 14, "y": 66},
            {"x": 15, "y": 17}, {"x": 16, "y": 27},
            {"x": 17, "y": 68}, {"x": 18, "y": 16},
            {"x": 19, "y": 49}, {"x": 20, "y": 15}
        ]
    };

    return (
        <Chart
            componentName="horizongraph"
            json={getLayerdChart(
                data,
                props.width,
                props.height
            )}
        />
    );
}
export default LayerdChart;
