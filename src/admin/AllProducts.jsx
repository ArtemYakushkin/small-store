import React from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";

import { db } from "../firebase.config";
import useGetDate from "../hooks/useGetDate";
import "../style/all-products.css";

const AllProducts = () => {
  const { data: productsData, loading } = useGetDate("products");

  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, "products", id));
    toast.success("Deleted!");
  };

  return (
    <section className="all">
      <div className="container">
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
            {loading ? (
              <h3 className="section__title" style={{ marginTop: "20px" }}>
                Loading.....
              </h3>
            ) : (
              <>
                {productsData.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img src={item.imgUrl} alt="" />
                    </td>
                    <td>{item.title}</td>
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
              </>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AllProducts;
