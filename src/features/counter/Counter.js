import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  increment,
  decrement,
  reset,
  incrementByAddingAmount,
} from "../counter/counterSlice";
const Counter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [incrementValue, setIncrementValue] = useState(0);

  const addValue = Number(incrementValue) || 0;

  return (
    <div className="w-[100%]">
      <div className="grid grid-cols-3 text-center w-[50%] m-auto sm:mt-[20rem]">
        <div
          className="cursor-pointer text-[40px]  text-[red]"
          onClick={() => dispatch(decrement())}
        >
          -
        </div>
        <div className="text-[40px]">{count.count}</div>
        <div
          className="cursor-pointer text-[40px] text-[#51f351]"
          onClick={() => dispatch(increment())}
        >
          +
        </div>
      </div>
      <div className="text-[25px] text-center  w-[fit-content] m-auto sm:mt-3 ">
        <p
          className="border-2 border-[transparent] hover:border-[blue] cursor-pointer px-4"
          onClick={() => dispatch(reset())}
        >
          reset
        </p>
        <p>{count.message}</p>
        <div className="flex sm:mt-5 gap-4">
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            onChange={(e) => setIncrementValue(e.target.value)}
            placeholder="add number"
          />
          <button
            className="shadow-lg px-4"
            onClick={() => dispatch(incrementByAddingAmount(addValue))}
          >
            add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
