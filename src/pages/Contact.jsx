import React, { useEffect, useState } from "react";
import { fetchData } from "../api/useApi";
const Contact = () => {
  const [post, setpost] = useState([]);

  useEffect(() => {
    const getstate = async () => {
      const data = await fetchData();
      setpost(data);
    };
    getstate()
  }, []);

  return (
    <div>
      {post.map((user, index) => (
      <div key={index} style={{ marginBottom: "2rem", border: "1px solid #ccc", padding: "1rem" }}>
          <img src={user.picture.large} alt="user" />
          <h2>{user.name.title} {user.name.first} {user.name.last}</h2>
          <p><strong>Gender:</strong> {user.gender}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Location:</strong> {user.location.city}, {user.location.country}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
        </div>


      ))}
    </div>
  );
};

export default Contact;
