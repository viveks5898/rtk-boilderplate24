import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { SelectAllPost, postAdded, postDeleted } from "./postSlice";
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
          id: nanoid(),
          title: title,
          content: content,
        })
      );
      setTitle("");
      setContent("");
    }
  };
  const deletePostOnClick = (id) => {
    dispatch(postDeleted(id));
  };
  return (
    <div className="text-center sm:mt-32">
      <h1 className="text-[40px] text-[dark] font-semibold">Add post </h1>
      <div className="flex flex-col gap-7 sm:w-[325px] m-auto sm:mt-11 border p-5 bg-[gray]">
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          onChange={onTitleChanged}
          value={title}
          placeholder="title......."
        />
        <textarea
          class="shadow resize-y rounded-md appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          col="12"
          value={content}
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
      <div className="mt-3">
        {posts &&
          posts.map((ele, key) => (
            <div className="shadow-lg m-auto p-6 w-[325px]">
              <p className="m-4">
                {key + 1} {ele.title}
              </p>
              <p className="m-4">{ele.content}</p>
              <Button onClick={() => deletePostOnClick(ele.id)}>
                delete
              </Button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PostsList;
