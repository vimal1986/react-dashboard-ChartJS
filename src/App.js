import React, { Component } from 'react';
import './App.css';
// import Chart from './components/Chart';
import Bar from './components/Chart';
import Line from './components/Chart';

class App extends Component {

  componentWillMount(){
    this.getChartData();
  }

  getChartData=()=>{
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets:[
          {
            label:'Population',
            data:[
              617594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
          ]
      } ,
      chartData1:{
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets:[
          {
            label:'emp',
            data:[
              617594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
          ]
      }
    
    });
  }

  render() {
         return (
        <div>
         <h1 className="header">Dashboard</h1> 
          <Bar chartData={this.state.chartData} location="Emp Rate" legendPosition="bottom" style/> 
          <Line chartData={this.state.chartData1} location="Var Rate" legendPosition="bottom" style/>
         <div className="footer">&copy;</div>
         </div>  
           );
    }
  }
 

export default App;
