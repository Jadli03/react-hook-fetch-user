import { useEffect, useState } from "react";
import CardList from "./components/CardList";
import Heading from "./components/Heading";
import Loading from "./components/Loading";
import SearchBox from "./components/SearchBox";

const App = () => {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState("");
  const [loading, setl] = useState(true);
  
  const changeText = (e) => {
    setText(e.target.value)
  }

  
    const filterdUser= users.filter(user => {
      return user.name.toLowerCase().includes(text.toLowerCase())
    })


  const getUsers = async () => {
    try {
      const result = await fetch("https://jsonplaceholder.typicode.com/users");
      setUsers(await result.json());
      setl(false);
    } catch (err) {
      setl(false);
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
 
   if(loading)
   {
     return <Loading />
   }
   else{
    return (
      <div className="App text-center">
      <Heading />

      <input
        value={text}
        onChange={changeText}
        />

      <CardList  user={filterdUser} />
    </div>
      );
    }


};

export default App;
