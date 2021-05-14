import React, { useState, useEffect } from "react";
// const key = "som"

const TableRow = ({ num, times }) => {
  const result = num * times;
  return (
    <>
      <div className="flex  m-4 gap-2 flex-row flex-nowrap flex-row items-center justify-center ">
        <text className="border w-10  self-center align-middle font-bold text-lg text-center text-purple-400 p-2 ">
          {num}
        </text>
        <text className="border w-10  self-center align-middle font-bold text-lg text-center text-pink-400 p-2">
          {"x"}
        </text>
        <text className="border w-10 self-center align-middle font-bold text-lg text-center text-yellow-400 p-2">
          {times}
        </text>
        <text className="border w-10 self-center align-middle font-bold text-lg text-center text-blue-400 p-2">
          {"="}
        </text>
        <text className="border w-10 self-center align-middle font-bold text-lg text-center text-green-400 p-2">
          {result}
        </text>
      </div>
    </>
  );
};

const Table = (props) => {
  return (
    <>
      <div className="border p-4 w-64 shadow-2xl">
        <text className="text-center font-mono underline text-blue-400 text-3xl">
          Table for {props.num}
        </text>
        {Array.apply(null, { length: 10 }).map((_, idx) => {
          return (
            <>
              <TableRow num={props.num} times={idx + 1} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Table;
