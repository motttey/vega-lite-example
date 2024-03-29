import React from 'react';
import Chart from './Chart.js';
import PropTypes from 'prop-types';

HorizonChart.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number
};

function HorizonChart (props) {
    const getHorizonChart = (
        data, width, height
    ) => {
        return {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "description": "Horizon Graph with 2 layers. (See https://idl.cs.washington.edu/papers/horizon/ for more details on Horizon Graphs.)",
            "width": width,
            "height": height,
            "data": data,
            "encoding": {
                "x": {
                    "field": "x", "type": "quantitative",
                    "scale": {"zero": false, "nice": false}
                },
                "y": {
                    "field": "y", "type": "quantitative",
                    "scale": {"domain": [0,50]},
                    "axis": {"title": "y"}
                }
            },
            "layer": [{
                "mark": {"type": "area", "clip": true, "orient": "vertical", "opacity": 0.6}
            }, {
                "transform": [{"calculate": "datum.y - 50", "as": "ny"}],
                "mark": {"type": "area", "clip": true, "orient": "vertical"},
                "encoding": {
                    "y": {
                        "field": "ny", "type": "quantitative",
                        "scale": {"domain": [0,50]}
                    },
                    "opacity": {"value": 0.3}
                }
            }],
            "config": {
                "area": {"interpolate": "monotone"}
            }
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
            json={getHorizonChart(
                data,
                props.width,
                props.height
            )}
        />
    );
}

export default HorizonChart;
