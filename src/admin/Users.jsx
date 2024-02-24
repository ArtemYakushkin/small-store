import React from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";

import useGetDate from "../hooks/useGetDate";
import { db } from "../firebase.config";

const Users = () => {
  const { data: usersData, loading } = useGetDate("users");

  const deleteUser = async (id) => {
    await deleteDoc(doc(db, "users", id));
    toast.success("Deleted!");
  };

  return (
    <section className="all">
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Username</th>
              <th>Email</th>
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
                {usersData.map((user) => (
                  <tr key={user.id}>
                    <td>
                      <img src={user.photoURL} alt="" />
                    </td>
                    <td>{user.displayName}</td>
                    <td>{user.email}</td>
                    <td>
                      <i
                        onClick={() => {
                          deleteUser(user.uid);
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

export default Users;
