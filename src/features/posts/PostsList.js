import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { SelectAllPost, postAdded } from "./postSlice";
import Button from "../../common/Button";
import { nanoid } from "@reduxjs/toolkit";

const PostsList = () => {
  const posts = useSelector(SelectAllPost);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid,
          title: title,
          content: content,
        })
      );
    }
  };
  return (
    <div className="text-center sm:mt-32">
      <h1 className="text-[40px] text-[dark] font-semibold">Add post </h1>
      <div className="flex flex-col gap-7 sm:w-[325px] m-auto sm:mt-11 border p-5 bg-[gray]">
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          onChange={onTitleChanged}
          placeholder="title......."
        />
        <textarea
          class="shadow resize-y rounded-md appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          col="12"
          onChange={onContentChanged}
          rows={8}
          placeholder="content"
        />
      </div>
      <div className="mt-8 ">
        <Button
          onClick={onSavePostClicked}
          className="bg-slate-200 hover:bg-black hover:text-white font-semibold"
        >
          Add{" "}
        </Button>
      </div>
    </div>
  );
};

export default PostsList;
