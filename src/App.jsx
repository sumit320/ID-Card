import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch("https://randomuser.me/api?results=10");
        const data = await response.json();
        setUsers(data.results);
      } catch (err) {
        console.log("Something went Wrong");
      }
    };
    fetchdata();
  }, []);

  return (
    <div className="container">
      {users.map((user, index) => (
        <div key={index} className="card">
          <div className="header">ID Card</div>
          <img className="photo" src={user.picture.medium} />
          <h3 className="name">
            {user.name.first} {user.name.last}
          </h3>
          <p className="info">{user.email}</p>
          <p className="info">{user.phone}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
