// import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
// import React from "react";
// import { RouterProvider } from "react-router-dom";
// import { fetchData } from "../api/useApi";

// const About = () => {
//   const{data}=useQuery({
//     queryKey: ["random-users"],
//     queryFn: fetchData,
//   });

//   return (
//     <div >
//      {data.map((user,index)=>
//     (
        
//     ))}

//     </div>
//   );
// };

// export default About;

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../api/useApi"; // make sure path is correct

const About = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["random-user"],
    queryFn: fetchData,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.map((user, index) => (
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

export default About;

