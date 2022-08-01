import React from 'react';
import Chart from './Chart.js';
import PropTypes from 'prop-types';

QuantileDotPlot.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number
};

function QuantileDotPlot (props) {
    const getQuantileDotPlot = (
        data, width, height
    ) => {
        return {
            "$schema": "https://vega.github.io/schema/vega/v5.json",
            "description": "A quantile dot plot conveying the uncertainty of bus arrival times.",
            "width": width,
            "height": height,
            "padding": 5,
      
            "signals": [
                {
                    "name": "quantiles", "value": 20,
                    "bind": {"input": "range", "min": 10, "max": 200, "step": 1}
                },
                {"name": "mean", "update": "log(11.4)"},
                {"name": "sd", "value": 0.2},
                {"name": "step", "update": "1.25 * sqrt(20 / quantiles)"},
                {"name": "size", "update": "scale('x', step) - scale('x', 0)"},
                {"name": "area", "update": "size * size"},
                {
                    "name": "select", "init": "quantileLogNormal(0.05, mean, sd)",
                    "on": [
                        {
                            "events": "click, [mousedown, window:mouseup] > mousemove",
                            "update": "clamp(invert('x', x()), 0.0001, 30)"
                        },
                        {
                            "events": "dblclick",
                            "update": "0"
                        }
                    ]
                }
            ],
      
            "data": data,
      
            "scales": [
                {
                    "name": "x",
                    "domain": [0, 30],
                    "range": "width"
                },
                {
                    "name": "y",
                    "domain": {"signal": "[0, height / size]"},
                    "range": "height"
                }
            ],
      
            "axes": [
                {"scale": "x", "orient": "bottom"}
            ],
      
            "marks": [
                {
                    "type": "symbol",
                    "from": {"data": "quantiles"},
                    "encode": {
                        "enter": {
                            "x": {"scale": "x", "field": "bin"},
                            "y": {"scale": "y", "signal": "datum.y0 + 0.5"},
                            "size": {"signal": "area"}
                        },
                        "update": {
                            "fill": {"signal": "datum.bin < select ? 'firebrick' : 'steelblue'"}
                        }
                    }
                },
                {
                    "type": "rule",
                    "interactive": false,
                    "encode": {
                        "update": {
                            "x": {"scale": "x", "signal": "select"},
                            "y": {"value": 0},
                            "y2": {"signal": "height"},
                            "stroke": {"signal": "select ? '#ccc': 'transparent'"}
                        }
                    }
                },
                {
                    "type": "text",
                    "interactive": false,
                    "encode": {
                        "enter": {
                            "baseline": {"value": "top"},
                            "dx": {"value": 3},
                            "y": {"value": 2}
                        },
                        "update": {
                            "x": {"scale": "x", "signal": "select"},
                            "text": {"signal": "format(cumulativeLogNormal(select, mean, sd), '.1%')"},
                            "fill": {"signal": "select ? '#000': 'transparent'"}
                        }
                    }
                }
            ]
        };
    };

    const data = [
        {
            "name": "quantiles",
            "transform": [
                {
                    "type": "sequence", "as": "p",
                    "start": {"signal": "0.5 / quantiles"},
                    "step": {"signal": "1 / quantiles"},
                    "stop": 1
                },
                {
                    "type": "formula", "as": "value",
                    "expr": "quantileLogNormal(datum.p, mean, sd)"
                },
                {
                    "type": "dotbin",
                    "field": "value",
                    "step": {"signal": "step"}
                },
                {
                    "type": "stack",
                    "groupby": ["bin"]
                },
                {
                    "type": "extent",
                    "field": "y1",
                    "signal": "ext"
                }
            ]
        }
    ];

    return (
        <Chart
            componentName="quantile_dot_plot"
            json={getQuantileDotPlot(
                data,
                props.width,
                props.height
            )}
        />
    );
}

export default QuantileDotPlot;
