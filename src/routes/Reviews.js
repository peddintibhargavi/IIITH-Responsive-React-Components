import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import './Reviews.css';
import About from './About';

const data01 = [
  { name: "Birthdays", value: 40  },
  { name: "Bachelor's party", value: 15,  },
  { name: "Farewell", value: 25,  },
  { name: "Wedding", value: 50,  },
];

const data02 = [
  { name: "5 ⭐", value: 90,  },
  { name: "4 ⭐", value: 20,  },
  { name: "3 ⭐", value: 12,  },
  { name: "2 ⭐", value: 6,  },
  { name: "1 ⭐", value: 2,  },
];

const data03 = [
  { name: "Indoor", value: 50,  },
  { name: "Halls", value: 30,  },
  { name: "Outdoor", value: 20,  },
  { name: "Beaches", value: 10,  },
  { name: "Temples", value: 20,  },
];

const data04 = [
  { name: "Morning", value: 60,  },
  { name: "Afternoon", value: 30,  },
  { name: "Evening", value: 10,  },
  { name: "Night", value: 30,  },
];


const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default class Reviews extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-active-shape-y93si';

  state = {
    activeIndex: 0,
  };

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
<>
     <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

      <ResponsiveContainer width="100%" height="100%">
 <div className="pie-card-container">
          <div className="pie-row">
            <div className="pie-card">
<h1>Events that customers choose</h1>
              <div className="pie-chart-container">
        <PieChart width={400} height={400}>
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={renderActiveShape}
            data={data01}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#663399"
            dataKey="value"
            onMouseEnter={this.onPieEnter}
          />
        </PieChart>
</div>
</div>
<div className="pie-card">
              <h1>Rating</h1>
              <div className="pie-chart-container">
 <PieChart width={400} height={400}>
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={renderActiveShape}
            data={data02}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#1e90ff"
            dataKey="value"
            onMouseEnter={this.onPieEnter}
          />
        </PieChart>
</div>
            </div>
          </div>
<div className="pie-row">
            <div className="pie-card">
              <h1>Places that customers choose</h1>
              <div className="pie-chart-container">
 <PieChart width={400} height={400}>
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={renderActiveShape}
            data={data03}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#2e8b57"
            dataKey="value"
            onMouseEnter={this.onPieEnter}
          />
        </PieChart>
</div>
            </div>
            <div className="pie-card">
              <h1>Part of a Day</h1>
              <div className="pie-chart-container">
 <PieChart width={400} height={400}>
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={renderActiveShape}
            data={data04}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#db7093"
            dataKey="value"
            onMouseEnter={this.onPieEnter}
          />
        </PieChart>
</div>
            </div>
          </div>
        </div>
      </ResponsiveContainer>
    <About/>
</>
    );
  }
}
