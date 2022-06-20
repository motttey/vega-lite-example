import React from 'react';
import embed from 'vega-embed';

function Chart (props) {
  embed(`#${props.componentName}`, props.json)
    .then((result) => {
      console.log(result);
    }).catch((e) => {});

  return (
    <div
      id={props.componentName}
    />
  )
}

export default Chart
