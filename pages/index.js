import embed from 'vega-embed';

const spec = "https://raw.githubusercontent.com/vega/vega/master/docs/examples/bar-chart.vg.json";


function HomePage() {
  embed('#vis', spec).then((result) => {
    console.log(result);
  }).catch((e) => {
    console.log(e);
  });

  return (
    <div>
      <div id="vis" />
    </div>
  )
}

export default HomePage
