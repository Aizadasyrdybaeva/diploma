import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Delivery from "./pages/Delivery";
import Wholesale from "./pages/Wholesale";
import Product from "./pages/Product";
import Category from "./pages/Category";
import { categoryCollection, productCollection } from "./firebase";
import { getDocs } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext({
  categories: [],
  products: [],
});

export default function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  //выполнить эту функцию только один раз

  useEffect(() => {
    // получить категории из списка категорий
    getDocs(categoryCollection).then((snapshot) => {
      //категории будут храниться в snapshot.docs

      //создать массив для категорий
      const newCategories = [];
      //заполнить массив данными из списка категорий
      snapshot.docs.forEach((doc) => {
        //doc = категория
        const category = doc.data();
        category.id = doc.id;

        newCategories.push(category);
      });
      //задать новый массив как состояние компонента
      setCategories(newCategories);
    });

    // получить категории из списка категорий
    getDocs(productCollection).then((snapshot) => {
      //категории будут храниться в snapshot.docs

      //создать массив для категорий
      const newProducts = [];
      //заполнить массив данными из списка категорий
      snapshot.docs.forEach((doc) => {
        //doc = категория
        const product = doc.data();
        product.id = doc.id;

        newProducts.push(product);
      });
      //задать новый массив как состояние компонента
      setProducts(newProducts);
    });
  }, []);

  return (
    <div className="App">
      <AppContext.Provider value={{ categories, products }}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/wholesale" element={<Wholesale />} />
            <Route path="/product" element={<Product />} />
            <Route path="/category/:path" element={<Category />} />
          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}
