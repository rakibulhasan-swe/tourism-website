import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Components/Home/Home";
import Blog from "./Components/Blogs/Blog";
import Contact from "./Components/Contact/Contact";
import OrderPackage from "./Components/OrderPackage/OrderPackage";
import OrderList from "./Components/OrderList/OrderList";
import AddService from "./Components/AddService/AddService";
import { createContext, useState } from "react";
import Login from "./Components/Login/Login";
import ManageOrderDashboard from "./Components/ManageOrderDashboard/ManageOrderDashboard";
import ServicesPage from "./Components/ServicesPage/ServicesPage";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import NoMatch from "./Components/NoMatch/NoMatch";

export const UserContext = createContext(null);

function App() {
  const [contextData, setContextData] = useState({});
  return (
    <UserContext.Provider value={[contextData, setContextData]}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/blog">
            <Blog
              ShowNavAndFooter={true}
              shortDescription={false}
              colNum="12"
            />
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <PrivateRoute path="/services">
            <ServicesPage></ServicesPage>
          </PrivateRoute>
          <PrivateRoute path="/order-dashboard">
            <ManageOrderDashboard />
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/order-list">
            <OrderList />
          </PrivateRoute>
          <PrivateRoute path="/package-detail/:id">
            <OrderPackage />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
