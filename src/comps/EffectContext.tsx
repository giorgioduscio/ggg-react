import { createContext, useEffect, useState } from "react"
import Navbar from "./Navbar"
import { Link, Outlet } from "react-router-dom"
import AnimalsData from "../datas/AnimalsData";

export const UsersContext =createContext({})

export default function EffectContext() {
  console.log("animals", AnimalsData());
  

  document.title="EffectContext"
  const [users, setUsers] =useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => setUsers(json))
  }, [])
 
  return (<UsersContext.Provider value={users}>
    <Navbar/>

    <div className="EffectContext">
      <details open className="usersMenu">
        <summary>Utenti</summary>
        <ol>{users.map(user=>{
            return <li key={user.id}>
                <Link to={`/effect/${user.id}`}>{user.name}</Link>
            </li>
        })}</ol>
      </details>

      <Outlet />
    </div>
  </UsersContext.Provider>)
}