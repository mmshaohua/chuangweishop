import React, { Component } from "react";
import { Link } from "react-router-dom";
class Home extends Component {
  render() {
    return (
      <div>
        <h1>首页</h1>
        <Link to="/categroy">分类</Link>
        <Link to="/ranking">排行</Link>
        <Link to="/vipposition">vip专区</Link>
        <Link to="/history">历史</Link>
      </div>
    );
  }
}

export default Home;
