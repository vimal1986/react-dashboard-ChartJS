import React, { Component } from 'react';
import './App.css';
// import Chart from './components/Chart';
import Bar from './components/Chart';
import Line from './components/Chart';
import Chart from './components/Chart';
import {
  Get
} from './api'
import { API } from './api/constant'

const dataSet = ['job', 'marital', 'education', 'default', 'housing', 'loan',
'contact', 'month', 'day_of_week','previous', 'poutcome']

class App extends Component {

  componentDidMount(){
    this.getChartData();
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartAPI = (value) =>{
    Get(API.get,value)
      .then(resp => {
        let status_data = resp.data.slice(0, 5)
        this.setChartData(status_data)
      })
      .catch(err => {
        
      })
  }

  setChartData = (data) => {
    this.setState({
      chartData:{
        labels: ['basic.4y', 'high.school', 'basic.6y', 'Professional.course', 'Unknown', 'university.degree'],
        datasets:[
          {
            label:'Bank Marketing status for features_name',
            data:data,
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

  getChartData=()=>{
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['basic.4y', 'high.school', 'basic.6y', 'Professional.course', 'Unknown', 'university.degree'],
        datasets:[
          {
            label:'Emp Rate',
            data:[
              94,
              45,
              60,
              19,
              62,
              72
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
        labels: ['basic.4y', 'high.school', 'basic.6y', 'Professional.course', 'Unknown', 'university.degree'],
        datasets:[
          {
            label:'emp rate',
            data:[
              24,
              15,
              10,
              9,
              13,
              2
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
          <Bar chartData={this.state.chartData} location="Bank Marketing status for features_name Emp Rate" legendPosition="bottom" style/> 
          <Line chartData={this.state.chartData1} location="Bank Marketing status for features_name Var Rate" legendPosition="bottom" style/>
         <div className="footer">&copy;</div>
         </div>  
           );
    }
  }
 

export default App;
