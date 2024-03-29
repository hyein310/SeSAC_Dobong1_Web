import { Route, Routes } from "react-router-dom";
import { Test } from "./pages/Test";
import MainPage from './pages/MainPage';
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import "./styles/Common.scss";
import ProductPage from "./pages/ProductPage";
import PhotoPage from "./pages/PhotoPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [photos, setPhotos] = useState([]);

  const tempProductsData = [
    {
      id: 1,
      name: '다이슨 슈퍼소닉',
      email: 'Eliseo@gardner.biz',
      body: '다이슨 슈퍼소닉 헤어드라이어를 위한 자석 부착형 스타일링 노즐, 스탠드 및 스타일링 액세서리.',
    },
    {
      id: 2,
      name: 'SSD 1TB',
      email: 'Jayne_Kuhic@sydney.com',
      body: '삼성전자 삼성 외장SSD T7 1TB 외장하드 1테라 USB3.2 Gen.2 Type-C MU-PC1T0 공식인증 (정품)',
    },
  ];

  const getProducts = async() => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/comments");
    // console.log(res.data[0]);  //{postId, id, name, email, body}

    setProducts(res.data.slice(0,10));
  }

  const getPhotos = async() => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/photos");
    console.log(res.data[0]);  // {albumId, id, title, url, thumbnailUrl}

    setPhotos(res.data.slice(0,10));
  }

  useEffect(() => {
    getProducts();
    getPhotos();
  }, []);

  return (
    <div className="App">
      <Header />
      {/* 헤더나 공통적인 부분을 라우터 위에 사용하면 됨 */}

      <Routes>
        <Route path="/" element={<MainPage></MainPage>}></Route>
        <Route path="/test" element={<Test></Test>}></Route>
        <Route path="/products" element={<ProductPage products={products}></ProductPage>}></Route>
        <Route path="/products/:productId" element={<ProductDetailPage products={products}></ProductDetailPage>}></Route>
        <Route path="/photos" element={<PhotoPage photos={photos}></PhotoPage>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
