import { GET_USER_ROLES  } from "../queries/user/user_roles";
import { useQuery, useLazyQuery } from "@apollo/client";
import clientHasuraPublic from "../apolloClient"
import { useEffect, useState } from "react";


const Home = () => {
  useQuery(GET_USER_ROLES, {
    fetchPolicy: "network-only",
    client: clientHasuraPublic,
    onCompleted: (res) => {
      console.log(res)
    },
  });

  const [get_user_roles] = useLazyQuery(GET_USER_ROLES, {
    fetchPolicy: "network-only",
    client: clientHasuraPublic,
    onCompleted: (res) => {
      console.log(res)
    },
  });

  useEffect(() => {
      get_user_roles();
    });

  

    return (
      <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>Home</h1>;
      <button onClick={() => {
            get_user_roles();
          }}>
            click for user roles in console
      </button>
      
      </>
    )
    
    
  };
  
  export default Home;