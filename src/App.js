import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import productApi from "./api/productApi";
import "./App.css";
import Header from "./components/Header/Header";
const Photo = React.lazy(() => import("./features/photo/index"));
function App() {
  //const [productList, setProductList] = useState([]);
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10,
        };
        const response = await productApi.getAll(params);
        console.log(response);
      } catch (er) {
        console.log(er);
      }
    };
    fetchProductList();
  }, []);
  return (
    <div className="App">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/photos" />
            <Route path="/photos" component={Photo} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
