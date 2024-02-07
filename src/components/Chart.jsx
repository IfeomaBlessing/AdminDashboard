import { faDotCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer} from 'recharts';
import '../components/chart.css'
import Piechart from './Piechart';

const Chart = () => {
  const data = [
  {
    name: 'January',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'February',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'March',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'April',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'June',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
 
];
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'black'];
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};



  return (
   
    <>
      <article className="chart">
        <div className="chart-top">
            <h5>Total Revenue</h5>
            <FontAwesomeIcon icon={faDotCircle} />
        </div>
        <div className="chart-details">
                 <Piechart/>
              <div className="pie-details">
                <h4>Total Sales Made Today</h4>
          <h3>$5000</h3>
          <p>Previous tansactions processing. Last
            payments may not be included.
          </p>
          </div>
        </div>
      </article>

      <article className="barchart">
        <h4>Income For The Last Months</h4>

        <div style={{ width: '100%', height:250 }}>
       <ResponsiveContainer>
        <BarChart className='bar'
      width={500}
      height={250}
      data={data}
      margin={{
        top: 50,
        right: 10,
        left: 10,
        bottom: 5,
      }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
</ResponsiveContainer>
</div>
      </article>
    </>
  )
}

export default Chart
