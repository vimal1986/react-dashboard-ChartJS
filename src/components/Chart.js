import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import './Chart.css';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData,
      chartData1:props.chartData1,
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }

  render(){
    console.log(this.state.chartData);
    return (
      <div className="flex-container">
         <div className="bar chart">
        <Bar 
          data={this.state.chartData}
          options={{
            maintainAspectRatio: true,
            title:{
              display:this.props.displayTitle,
              text:this.props.location,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
</div>
<div className="line chart">
        <Line
          data={this.state.chartData}
          options={{
            maintainAspectRatio: true,
            title:{
              display:this.props.displayTitle,
              text: this.props.location,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
</div>
<div className="pie chart">
        <Pie
          data={this.state.chartData}
          options={{
            maintainAspectRatio: true,
            title:{
              display:this.props.displayTitle,
              text:this.props.location,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
        </div>
      </div>
    )
  }
}

export default Chart;
