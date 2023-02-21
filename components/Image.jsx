import React from "react";
import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import { FaComment } from "react-icons/fa";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

const Image = ({ id, image }) => {
  const [likes, setLikes] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db, "posts", id, "likes"), (snapshot) => {
        setLikes(snapshot.docs);
      }),
    [db, id]
  );

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", id, "comments"),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => {
          setComments(snapshot.docs);
        }
      ),
    [db, id]
  );

  return (
    <div>
      <div className="col-span-1 mx-auto my-auto relative">
        <img
          src={image}
          className=" h-[159px] w-[159px] object-cover bg-black sm:h-[221px] sm:w-[221px]  md:h-[291px] md:w-[291px] lg:h-[293px] lg:w-[293px]  "
          alt=""
        />
        <div className="h-[159px] w-[159px] absolute text-black z-40 top-0 left-0 bg-black hover:opacity-75 opacity-0 transition-all duration-500 ease-out  object-cover sm:h-[221px] sm:w-[221px]  md:h-[291px] md:w-[291px] lg:h-[293px] lg:w-[293px] ">
          <div className="absolute top-32 left-24 z-50 flex items-center space-x-3   text-white">
            <div className="flex items-center">
              <HeartIconFilled className="w-6 h-6 z-50 mr-2" />
              <span className="text-sm font-semibold">{likes.length}</span>
            </div>
            <div className="flex items-center">
              <FaComment className="w-5 h-5 mr-2" />
              <span className="text-sm font-semibold">{comments.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
