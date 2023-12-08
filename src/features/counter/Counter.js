import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../counter/counterSlice";
const Counter = () => {
  const count = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  console.log("count", count);
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
      </div>
    </div>
  );
};

export default Counter;
