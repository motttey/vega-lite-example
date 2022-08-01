import React from 'react';
import embed from 'vega-embed';
import PropTypes from 'prop-types';

Chart.propTypes = {
    componentName: PropTypes.string,
    json: PropTypes.any
};

function Chart (props) {
    if (typeof window === 'object') {
    //documentを使う関数を入れる
        embed(`#${props.componentName}`, props.json)
            .then((result) => {
                console.log(result);
            }).catch((e) => {
                console.log(e);
            });
    }

    return (
        <div
            id={props.componentName}
        />
    );
}

export default Chart;
