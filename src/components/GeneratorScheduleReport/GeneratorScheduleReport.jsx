import { Component } from "react";

import s from "./GeneratorScheduleReport.module.scss";
import "./s.css";

import {
  ComposedChart,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  Line,
} from "recharts";

// prop
// chapter: "product",
// text: "Продукты",
// value: "5 000.00",

class GeneratorScheduleReport extends Component {
  state = {
    data: [
      {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
    ],
    activeIndex: 0,
  };

  handleClick = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    const { activeIndex, data } = this.state;
    const activeItem = data[activeIndex];

    return (
      <div style={{ width: 600, height: 200 }} className="asd">
        {/* <ResponsiveContainer width="100%" height="100%">
          <BarChart width={150} height={40} data={this.state.data}>
            <Bar dataKey="uv" fill="tomato" />
            <XAxis
              dataKey="name"
              angle={0}
              tickSize={0}
              padding={{ left: 20, right: 20 }}
              label={{ value: "Index", angle: -90, position: "insideLeft" }}
              axisLine={false}
            />
          </BarChart>
        </ResponsiveContainer> */}
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            layout="vertical"
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" scale="band" />
            <Tooltip />
            <Legend />
            <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            {/* <Line dataKey="uv" stroke="#ff7300" /> */}
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default GeneratorScheduleReport;
