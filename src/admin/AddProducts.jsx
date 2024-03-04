import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection, setDoc } from "firebase/firestore";
import { db, storage } from "../firebase.config";

import Loader from "../components/Loader";
import "../style/add-product.css";

const AddProducts = () => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterShortDesc, setEnterShortDesc] = useState("");
  const [enterDescription, setEnterDescription] = useState("");
  const [enterPrice, setEnterPrice] = useState("");
  const [enterCategory, setEnterCategory] = useState("");
  const [enterProductImg, setEnterProductImg] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const addProduct = async (e) => {
    e.preventDefault();

    try {
      if (
        !enterTitle ||
        !enterShortDesc ||
        !enterDescription ||
        !enterPrice ||
        !enterCategory ||
        !enterProductImg
      ) {
        toast.error("Please fill in all fields");
        return;
      }

      setLoading(true);

      const docRef = await addDoc(collection(db, "products"), {
        productName: enterTitle,
        shortDesc: enterShortDesc,
        description: enterDescription,
        price: enterPrice,
        category: enterCategory,
      });

      const storageRef = ref(
        storage,
        `productImages/${docRef.id}_${enterProductImg.name}`
      );
      const uploadTask = uploadBytesResumable(storageRef, enterProductImg);

      await uploadTask;

      const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

      await setDoc(docRef, { imgUrl: downloadURL }, { merge: true });

      toast.success("Product successfuly added!");
      setLoading(false);
      navigate("/dashboard/all-products");
    } catch (error) {
      toast.error("Error adding product: " + error.message);
      setLoading(false);
    }
  };

  return (
    <section className="add">
      <div className="container">
        <div className="add__wrapper">
          {loading ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Loader />
            </div>
          ) : (
            <>
              <div className="subtitle-box" style={{ marginBottom: "30px" }}>
                <span className="subtitle-line"></span>
                <p className="subtitle">Billing Information</p>
              </div>
              <form className="add__form" onSubmit={addProduct}>
                <div className="add__form-group">
                  <p className="add__form-text">Product Title</p>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="Enter Title"
                    value={enterTitle}
                    onChange={(e) => setEnterTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="add__form-group">
                  <p className="add__form-text">Short Description</p>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="Enter Short Desc"
                    value={enterShortDesc}
                    onChange={(e) => setEnterShortDesc(e.target.value)}
                    required
                  />
                </div>
                <div className="add__form-group">
                  <p className="add__form-text">Description</p>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="Enter Description"
                    value={enterDescription}
                    onChange={(e) => setEnterDescription(e.target.value)}
                    required
                  />
                </div>
                <div className="add__form-double-group">
                  <div className="add__form-group">
                    <p className="add__form-text">Price</p>
                    <input
                      className="form-input"
                      type="text"
                      placeholder="Enter Price"
                      value={enterPrice}
                      onChange={(e) => setEnterPrice(e.target.value)}
                      required
                    />
                  </div>
                  <div className="add__form-group">
                    <p className="add__form-text">Category</p>
                    <select
                      className="add__form-select"
                      value={enterCategory}
                      onChange={(e) => setEnterCategory(e.target.value)}
                    >
                      <option className="add__form-option">Add category</option>
                      <option className="add__form-option" value="sofa">
                        Sofa
                      </option>
                      <option className="add__form-option" value="chair">
                        Chair
                      </option>
                      <option className="add__form-option" value="armchair">
                        Armchair
                      </option>
                      <option className="add__form-option" value="bed">
                        Bed
                      </option>
                      <option className="add__form-option" value="table">
                        Table
                      </option>
                    </select>
                  </div>
                </div>
                <div className="add__form-group">
                  <label className="form__file" htmlFor="fileInputAdd">
                    Add product image
                    <span>
                      <i class="ri-file-add-line"></i>
                    </span>
                  </label>
                  <input
                    id="fileInputAdd"
                    type="file"
                    accept="image/*, .png, .jpg, .gif, .web"
                    style={{ display: "none" }}
                    onChange={(e) => setEnterProductImg(e.target.files[0])}
                    required
                  />
                </div>
                <button className="btn-bay" type="submit">
                  Add Product
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default AddProducts;
