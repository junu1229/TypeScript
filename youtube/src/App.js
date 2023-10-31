import './App.css';
import { getCategories, selectCategories, selectUser } from './api/Category';
import { useState, useEffect } from "react";


function App() {
  const [categories, setCategories] = useState([]); // 값을 불러와서 저장하는거
  
  const categoryAPI = async () => {
    const result = await getCategories();
    setCategories(result.data);
  }

  useEffect(() => {
    categoryAPI();
    oneAPI();
    userAPI();
  },[]);

  const [one, setOne] = useState([]);

  const oneAPI = async () => {
    const result = await selectCategories();
    setOne(result.data);
  }

  const [user, setUser] = useState([]);

  const userAPI = async () => {
    const result = await selectUser();
    setUser(result.data);
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi</h1>
        {categories.map((a) => (
                  <h1>{a.categoryName}</h1>
                ))}
        {/* <h1>{one.categoryName}</h1> */}
          {user.map((b)=>(
            <h2>{b.name}</h2>
          ))}
      </header>
    </div>
  );
}

export default App;
