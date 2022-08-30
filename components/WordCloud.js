import React from 'react';
import Chart from './Chart.js';
import PropTypes from 'prop-types';

WordCloud.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number
};

function WordCloud (props) {
    const getWordCloud = (
        data, width, height
    ) => {
        return {
            "$schema": "https://vega.github.io/schema/vega/v5.json",
            "description": "A word cloud",
            "width": width,
            "height": height,
            "padding": 0,
            "data": [
                {
                    "name": "table",
                    "values": data,
                    "transform": [
                        {
                            "type": "countpattern",
                            "field": "data",
                            "case": "upper",
                            "pattern": "[\\w']{3,}",
                            "stopwords": "(i|me|my|myself|we|us|our|ours|ourselves|you|your|yours|yourself|yourselves|he|him|his|himself|she|her|hers|herself|it|its|itself|they|them|their|theirs|themselves|what|which|who|whom|whose|this|that|these|those|am|is|are|was|were|be|been|being|have|has|had|having|do|does|did|doing|will|would|should|can|could|ought|i'm|you're|he's|she's|it's|we're|they're|i've|you've|we've|they've|i'd|you'd|he'd|she'd|we'd|they'd|i'll|you'll|he'll|she'll|we'll|they'll|isn't|aren't|wasn't|weren't|hasn't|haven't|hadn't|doesn't|don't|didn't|won't|wouldn't|shan't|shouldn't|can't|cannot|couldn't|mustn't|let's|that's|who's|what's|here's|there's|when's|where's|why's|how's|a|an|the|and|but|if|or|because|as|until|while|of|at|by|for|with|about|against|between|into|through|during|before|after|above|below|to|from|up|upon|down|in|out|on|off|over|under|again|further|then|once|here|there|when|where|why|how|all|any|both|each|few|more|most|other|some|such|no|nor|not|only|own|same|so|than|too|very|say|says|said|shall)"
                        },
                        {
                            "type": "formula", "as": "angle",
                            "expr": "0"
                        },
                        {
                            "type": "formula", "as": "weight",
                            "expr": "600"
                        }
                    ]
                }
            ],
            "scales": [
                {
                    "name": "color",
                    "type": "ordinal",
                    "domain": {"data": "table", "field": "text"},
                    "range": ["steelblue", "firebrick"]
                }
            ],      
            "marks": [
                {
                    "type": "text",
                    "from": {"data": "table"},
                    "encode": {
                        "enter": {
                            "text": {"field": "text"},
                            "align": {"value": "center"},
                            "baseline": {"value": "alphabetic"},
                            "fill": {"scale": "color", "field": "text"}
                        },
                        "update": {
                            "fillOpacity": {"value": 1}
                        },
                        "hover": {
                            "fillOpacity": {"value": 0.5}
                        }
                    },
                    "transform": [
                        {
                            "type": "wordcloud",
                            "size": [width, height],
                            "text": {"field": "text"},
                            "rotate": {"field": "datum.angle"},
                            "font": "Helvetica Neue, Arial",
                            "fontSize": {"field": "datum.count"},
                            "fontWeight": {"field": "datum.weight"},
                            "fontSizeRange": [16, 48],
                            "padding": 2
                        }
                    ]
                }
            ]
        };      
    };

    const data = [
        "A visual analytics (VA) interface for formulating evaluation metrics of multi-dimensional time-series data is proposed. ",
        "Evaluation metrics such as key performance indicators (KPI) are expected to play an important role in quantitatively evaluating current situations and the quality of target objects. ",
        "However, it is difficult for even domain experts to formulate metrics, especially for data with complexity related to dimensionality and temporal characteristics. ",
        "The proposed interface is designed by extending the concept of semantic interaction to consider the temporal characteristics of target data. ",
        "It represents metrics as a linear combination of data attributes and provides a means for adjusting it through interactive VA. ",
        "On an animated scatter plot, an analyst can directly manipulate several visualized objects, i.e., a node, a trajectory, and a convex hull, as the group of nodes and trajectories. ",
        "The result of manipulating the objects is reflected in the linear combination of attributes, which corresponds to an axis of the scatter plot. ",
        "Using the axes as the output of the analysis, analysts can formulate a metric. ",
        "The effectiveness of the proposed interface is demonstrated through an example and evaluated by two user experiments on the basis of hypotheses obtained from the example."
    ];

    return (
        <Chart
            componentName="wordcloud"
            json={getWordCloud(
                data,
                props.width,
                props.height
            )}
        />
    );
}
export default WordCloud;
