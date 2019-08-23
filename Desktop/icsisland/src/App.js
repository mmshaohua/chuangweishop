import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

//组件懒加载
const Home = lazy(() => import("./pages/home/home/Home"));
//子页面
const Categroy = lazy(() => import("./pages/home/categroy/categroy"));
const Ranking = lazy(() => import("./pages/home/ranking/ranking"));
const Vipposition = lazy(() => import("./pages/home/vipposition/vipposition"));
const History = lazy(() => import("./pages/home/history/history"));

//配置路由
const AppPanel = props => {
  return (
    <Router>
      <div className="app">
        {/*根页面*/}
        <Switch>
          <Route
            path="/"
            exact
            render={() => {
              return <Redirect to="/home" />;
            }}
          />
          <Route exact path="/home" component={Home} />
          <Route exact path="/categroy" component={Categroy} />
          <Route exact path="/ranking" component={Ranking} />
          <Route exact path="/vipposition" component={Vipposition} />
          <Route exact path="/history" component={History} />
          <Redirect to="/home" />
        </Switch>
      </div>
    </Router>
  );
};

const App = props => {
  return (
    <Suspense fallback={<h1>加载中。。。</h1>}>
      <AppPanel />
    </Suspense>
  );
};
export default App;
