import React from "react";
import axios from "axios";

const baseURL = "https://us-central1-future4-users.cloudfunctions.net/api";

const UserListItem = props => {
  const handleOnClickDelete = async () => {
    const url = `${baseURL}/users/deleteUser?id=bananinha`;

    const axiosConfig = {
      headers: {
        "api-token": "luanbonetto"
      }
    };

    try {
      await axios.delete(url, axiosConfig);
      props.onDeleteUser();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <li>
      {props.user.name} <button onClick={handleOnClickDelete}>X</button>
    </li>
  );
};

export default UserListItem;