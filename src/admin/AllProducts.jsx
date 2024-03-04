import React, { useState } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";

import { db } from "../firebase.config";
import useGetDate from "../hooks/useGetDate";
import Loader from "../components/Loader";
import "../style/all-products.css";

const AllProducts = () => {
  const { data: productsData, loading } = useGetDate("products");
  const [search, setSearch] = useState("");

  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, "products", id));
    toast.success("Deleted!");
  };

  // const handleSearch = (e) => {
  //   const searchTerm = e.target.value;
  //   const searchedProducts = productsData.filter((item) =>
  //     item.productName.includes(searchTerm)
  //   );
  //   setProducts(searchedProducts);
  // };

  const filteredProduct = productsData.filter((item) => {
    return item.productName.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <section className="all">
      <div className="container">
        <div className="all__search">
          <span className="all__icon-search">
            <i class="ri-search-line"></i>
          </span>
          <input
            className="form-input"
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {loading ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Loader />
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredProduct.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.imgUrl} alt="" />
                  </td>
                  <td>{item.productName}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                  <td>
                    <i
                      onClick={() => {
                        deleteProduct(item.id);
                      }}
                      class="ri-delete-bin-2-line"
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};

export default AllProducts;
