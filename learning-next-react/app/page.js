"use client";

import Header from "@/Components/Header";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Home() {

    // Header

    const [users, setusers] = useState([])
    const getUsers = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
            const data = res.data;
            setusers(data);
            // console.log(data);
        });
    }


// with useEffect, we are automatically getting the data from the API. We do NOT have to get it onclick of button.
    useEffect(() => {
      getUsers()
    }, [])
    

    const [username, setUsername] = useState("")

    return (
        <main className="flex flex-col items-center justify-center min-h-screen gap-4 p-24">
            <Header />
            <h1 className="text-6xl font-bold text-center">
                Welcome Boss Ansh!!!
            </h1>
            <form>
                <input
                    type="text"
                    placeholder="Search for a lamborghini..."
                    className="p-4 m-4 text-black border-2 border-gray-300 rounded-lg w-96"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button
                    type="submit"
                    className="p-4 text-white bg-blue-500 rounded-lg"
                >
                    Search
                </button>

                <a href="/Contact">
                    <button
                        type="button"
                        className="p-4 mx-4 text-white bg-red-500 rounded-lg"
                    >
                        Contact Us
                    </button>
                </a>
            </form>

            <button
                type="button"
                className="px-4 py-2 font-bold text-black rounded-lg shadow-lg bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                onClick={getUsers}
            >
                Get Data
            </button>
            <div className="p-8 mt-5 bg-gray-900 w-[100%]">
                <ul>
                    {users.map((user) => (
                        <li key={user.id} className="text-white">
                            {user.name} --- <Link className="text-blue-400" href={`/${user.id}`}>View Details</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}
