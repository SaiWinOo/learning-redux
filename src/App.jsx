import ComponentA from "./components/ComponentA.jsx";
import ComponentB from "./components/ComponentB.jsx";
import {createContext, useEffect, useState} from "react";

export const UserContext = createContext();
const App = () => {
    const [name, setName] = useState('');
    useEffect(()=>{
        setName('hello')
        setTimeout(()=> {
            setName('hi');
        },2000)
    },[])
    return (
        <UserContext.Provider value={{ name : name }}>
            <div>
                <ComponentA/>
                <ComponentB/>
            </div>
        </UserContext.Provider>
    );
};

export default App;