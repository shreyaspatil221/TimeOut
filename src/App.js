import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { ProgressBar } from 'react-bootstrap';

class App extends React.Component {

  
  constructor(props) {
    super(props);
    this.state = {
      Mon_In_Time: '',
      Mon_Out_Time: '',
      Tue_In_Time: '',
      Tue_Out_Time: '',
      Wed_In_Time: '',
      Wed_Out_Time: '',
      Thu_In_Time: '',
      Thu_Out_Time: '',
      Fri_In_Time: '',
      Fri_Out_Time: '',
      mon_now: 20
    };
  }

  
  



  render() {
    const now = 30;
    let monintime = document.getElementById('mon-in-time');
    let monouttime = document.getElementById('mon-out-time');
    


    function mondayTime( Mon_In_Time,Mon_Out_Time) {
      alert("Hi");
      let difference = Mon_Out_Time - Mon_In_Time;
      console.log(difference.value)
      alert(difference);
    
    }

    return (
      <div className="App container-fluid appbody">

        <div className="row ">
          <div className="col-12">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="col-12">
            <h1>Time Report</h1>
          </div>
        </div>




        <div className="row pt-4 pb-4 mt-4">

          <div className="col-1">
          </div>
          <div className="col-2 day">
            <div><img src={require('./img/unhappy.svg')} width="50%" height="50%" /></div>
          </div>
          <div className="col-2 day">
            <div><img src={require('./img/confused.svg')} width="50%" height="50%" /></div>
          </div>
          <div className="col-2 day">
            <div><img src={require('./img/smile.svg')} width="50%" height="50%" /></div>
          </div>
          <div className="col-2 day">
            <div><img src={require('./img/happy.svg')} width="50%" height="50%" /></div>
          </div>
          <div className="col-2 day">
            <div><img src={require('./img/inlove.svg')} width="50%" height="50%" /></div>
          </div>
          <div className="col-1">
          </div>

        </div>

        <div className="row pt-0 pb-4 ">

          <div className="col-1">
          </div>
          <div className="col-2 day">
            <h5>Monday</h5>
          </div>
          <div className="col-2 day">
            <h5>Tuesday</h5>
          </div>
          <div className="col-2 day">
            <h5>Wednesday</h5>
          </div>
          <div className="col-2 day">
            <h5>Thursday</h5>
          </div>
          <div className="col-2 day">
            <h5>Friday</h5>
          </div>
          <div className="col-1">
          </div>

        </div>

        <div className="row pt-4 pb-4 ">

          <div className="col-1 mt-2 text-center">
            <h6>In-Time</h6>
          </div>
          <div className="col-2 day">
            <div class="input-group-prepend">
              <input type="time" id="mon-in-time" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
            </div>
          </div>
          <div className="col-2 day">
            <div class="input-group-prepend">
              <input type="time" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            </div>
          </div>
          <div className="col-2 day">
            <div class="input-group-prepend">
              <input type="time" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            </div>
          </div>
          <div className="col-2 day">
            <div class="input-group-prepend">
              <input type="time" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            </div>
          </div>
          <div className="col-2 day">
            <div class="input-group-prepend">
              <input type="time" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            </div>
          </div>
          <div className="col-1">
          </div>

        </div>

        <div className="row pt-2 pb-4 ">

          <div className="col-1 mt-2 text-center">
            <h6>Out-Time</h6>
          </div>
          <div className="col-2 day">
            <div class="input-group-prepend">
              <input type="time" id="mon-out-time" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            </div>
          </div>
          <div className="col-2 day">
            <div class="input-group-prepend">
              <input type="time" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            </div>
          </div>
          <div className="col-2 day">
            <div class="input-group-prepend">
              <input type="time" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            </div>
          </div>
          <div className="col-2 day">
            <div class="input-group-prepend">
              <input type="time" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            </div>
          </div>
          <div className="col-2 day">
            <div class="input-group-prepend">
              <input type="time" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            </div>
          </div>
          <div className="col-1">
          </div>

        </div>

        <div className="row pt-2 pb-4 ">

          <div className="col-1 mt-2">
            <h6>Day Progress</h6>
          </div>
          <div className="col-2 mt-2 day">
            <ProgressBar now={this.state.mon_now} label={`${this.state.mon_now}%`} />
          </div>
          <div className="col-2 mt-2 day">
            <ProgressBar now={this.state.mon_now} label={`${this.state.mon_now}%`} />
          </div>
          <div className="col-2 mt-2 day">
            <ProgressBar now={this.state.mon_now} label={`${this.state.mon_now}%`} />
          </div>
          <div className="col-2 mt-2 day">
            <ProgressBar now={this.state.mon_now} label={`${this.state.mon_now}%`} />
          </div>
          <div className="col-2 mt-2 day">
            <ProgressBar now={this.state.mon_now} label={`${this.state.mon_now}%`} />
          </div>
          <div className="col-1">
          </div>

        </div>

        <div className="row pt-2 pb-4 ">

          <div className="col-1 mt-2">
            <h6>Week Progress</h6>
          </div>
          <div className="col-10 mt-2 day">
            <ProgressBar now={this.state.mon_now} label={`${this.state.mon_now}%`} />
          </div>

        </div>

      <div className="row" >
      <button className="btn btn-lg btn-primary" type="button" onClick="mondayTime()">Click</button>
      </div>



      </div>
    );
  }
}

export default App;
