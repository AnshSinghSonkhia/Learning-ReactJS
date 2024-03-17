"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = ({params}) => {
    const { id } = params;
    const [users, setusers] = useState([])
    const getUsers = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users/"+id).then((res) => {
            const data = res.data;
            setusers(data);
            // console.log(data);
        });
    }
    useEffect(() => {
        getUsers()
    }, [])

    
  return (
    <>
    <div>page { JSON.stringify(users) } </div>
    
    </>
  )
}

export default page