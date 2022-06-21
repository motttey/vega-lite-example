import embed from 'vega-embed';
import BarChart from '../components/BarChart.js'
import HorizonChart from '../components/HorizonChart.js'

function HomePage(props) {
  const width = 800;
  const height = 500;

  return (
    <div>
      <BarChart
        width={width}
        height={height}
      />
      <HorizonChart
        width={width}
        height={height/2}
      />
    </div>
  )
}

export default HomePage
