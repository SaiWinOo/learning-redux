import {increment, decrement, addByAmount} from "./counterSlice.jsx";
import {useDispatch, useSelector} from "react-redux";


const Counter = () => {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    return (
        <>
            <div>
                <button onClick={() => dispatch(increment())}>Add</button>
                <p>{count}</p>
                <button onClick={() => dispatch(decrement())}>subtract</button>
            </div>
            <button onClick={() => dispatch(addByAmount(5))}>add by 5</button>
        </>

)
    ;
};

export default Counter;