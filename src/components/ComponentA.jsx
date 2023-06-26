import {useContext} from "react";
import {UserContext} from "../App.jsx";

const ComponentA = () => {
    const { name } = useContext(UserContext);
    return (
        <div>
            Component A { name }
        </div>
    );
};

export default ComponentA;