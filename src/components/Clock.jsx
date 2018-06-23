import React from 'react';
import Time from './Time.jsx';
import Divider from './Divider.jsx';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    setInterval(this.updateTime, 1000)
    this.state = {
      time: this.getTime(),
    }
  }

  getTime() {
    const date = new Date;

    return {
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
    }
  }

  updateTime = () => {
    this.setState({ time: this.getTime() });
  }

  render() {
    const { time } = this.state;

    return (
      <div className="d-flex justify-content-start">
        <Time value={time.hours} />
        <Divider />
        <Time value={time.minutes} />
        <Divider />
        <Time value={time.seconds} />
      </div>
    )
  }
}