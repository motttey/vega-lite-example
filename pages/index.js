import embed from 'vega-embed';
import BarChart from '../components/BarChart.js'

function HomePage(props) {
  const width = 800;
  const height = 500;

  return (
    <div>
      <BarChart
        width={width}
        height={height}
      />
    </div>
  )
}

export default HomePage
