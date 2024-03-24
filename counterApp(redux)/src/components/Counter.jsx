import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/slices/CounterSlice";

const Counter = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center items-center gap-5 h-screen w-screen">
      <button
        className="rounded-sm border py-3 px-2 border-blue-400"
        onClick={() => dispatch(increment())}>
        Increment
      </button>
      <br />
      <br />
      <p>{count}</p>
      <br />
      <br />
      <button
        className="rounded-sm border py-3 px-2 border-blue-400"
        onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
