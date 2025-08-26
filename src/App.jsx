import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://randomuser.me/api?results=10");
        const data = await res.json();
        setUser(data.results);
      } catch (err) {
        console.log("Somethig went Wrong");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="id-card">
        {user.map((item, index) => (
          <div className="user-data" key={index}>
            <div className="header">ID card</div>
            <div className="divider">
              <img className="photo" src={item.picture.medium} />
              <div className="user-data2">
                <div className="name">
                  {item.name.title}
                  {item.name.first}
                  {item.name.last}
                </div>
                <div className="email">{item.email}</div>
                <div className="phone">{item.phone}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default App;
