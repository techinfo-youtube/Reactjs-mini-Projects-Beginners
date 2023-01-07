import React, { useState } from "react";
import { BiUserCircle, BiComment, BiShare } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function App() {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);

  //handle likes
  const handleLikes = () => {
    if (!like) {
      setLike(true);
      setCount(count + 1);
    } else {
      setLike(false);
      setCount(count - 1);
    }
  };

  const imageUrl =
    "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9zdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";
  return (
    <>
      <div className="main-container">
        <h1 className="text-info">POST LIKE APP</h1>
        <h4>Likes Count : {count}</h4>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-header">
            <BiUserCircle /> UserName
          </div>

          <img
            src={imageUrl}
            alt="post-img"
            height={"300px"}
            width="100%"
            onDoubleClick={handleLikes}
          />

          <div className="card-footer">
            {like ? (
              <AiFillHeart
                size={30}
                className="text-danger"
                onClick={handleLikes}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <AiOutlineHeart
                size={30}
                onClick={handleLikes}
                style={{ cursor: "pointer" }}
              />
            )}
            &nbsp;
            <BiComment size={30} />
            &nbsp;
            <BiShare size={30} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
