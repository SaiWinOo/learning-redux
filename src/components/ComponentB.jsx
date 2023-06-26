import {UserContext} from "../App.jsx";
import {useContext} from "react";

const ComponentB = () => {
    const {name} = useContext(UserContext);
    return (
        <h4>{ name }</h4>
    );
};

export default ComponentB;