import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import InnerCard from "./components/InnerCard/InnerCard";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading/Loading";
import "./App.scss";

function App() {
  const [data, setData] = useState([]);

  //pagination
  const [current, setCurrent] = useState(1);
  const [total, setTotal] = useState(15);

  const firstIndex = current * total;
  const lastIndex = firstIndex - total;
  const dataSlice = data.slice(lastIndex, firstIndex);

  //loader
  const [loading, setLoading] = useState(false);

  //dark mode
  const [dark, setDark] = useState(true);

  //fetch
  const URL = `https://restcountries.com/v2/all`;
  const getData = async () => {
    setLoading(false);
    const request = await fetch(URL);
    const response = await request.json();
    setData(response);
    setLoading(true);
  };

  useEffect(() => {
    getData();
  }, []);

  function paginationPage(num) {
    setCurrent(num);
  }

  return (
    <>
      <Header dark={dark} setDark={setDark} />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              loading ? (
                <Card
                  dark={dark}
                  data={data}
                  total={total}
                  current={current}
                  setCurrent={setCurrent}
                  paginationPage={paginationPage}
                  dataSlice={dataSlice}
                />
              ) : (
                <Loading />
              )
            }
          />
          <Route
            path="/:name"
            element={loading ? <InnerCard dark={dark} /> : <Loading />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
