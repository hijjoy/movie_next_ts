"use client";

import Image from "next/image";
import React, { useState, ChangeEvent } from "react";
import { BsChatSquareQuoteFill } from "react-icons/bs";
import { FaPen } from "react-icons/fa";
import Input from "../_components/input";

const PostPage = () => {
  const [userInput, setUserInput] = useState({
    creator: "",
    creator_email: "",
    title: "",
    summary: "",
    instructions: "",
    image: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setUserInput((prev) => ({ ...prev, image: URL.createObjectURL(file) }));
    }
  };

  const { creator, creator_email, title, summary, instructions, image } =
    userInput;
  return (
    <div className="flex flex-col items-center mt-24">
      <BsChatSquareQuoteFill size={35} color="#72d5cf" className="mb-[30px]" />
      <h1 className="text-[20px] font-semibold tracking-wider mb-14 text-center">
        영화 등록에 필요한 정보를
        <br /> 입력해주세요 !
      </h1>
      <div className="my-[50px] shadow-custom rounded-[20px] border-light_gray border border-solid w-[640px] flex flex-col items-center py-[100px] px-[40px]">
        <h1>favorite movie</h1>
        <p>아주아주 재밌는 영화</p>
        <form>
          <div>
            <Input
              text="이름"
              name="creator"
              value={creator}
              type="half"
              onChange={handleChange}
            />
            <Input
              text="이메일"
              name="creator_email"
              value={creator_email}
              type="half"
              onChange={handleChange}
            />
          </div>
          <Input
            text="영화 제목"
            name="title"
            value={title}
            onChange={handleChange}
          />
          <Input
            text="영화 줄거리"
            name="summary"
            value={summary}
            onChange={handleChange}
          />
          <div>
            <label htmlFor="instructions">주의 사항</label>
            <textarea
              name="instructions"
              value={instructions}
              onChange={handleChange}
            />
          </div>
          <div>
            <input type="file" id="image" onChange={handleImageChange} />
            <div>
              {image ? (
                <Image src={image} alt="image" width={100} height={100} />
              ) : (
                <div>No Image Picked Yet</div>
              )}
              <label htmlFor="image">Pick an Image</label>
            </div>
          </div>

          <button>
            <FaPen size={25} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostPage;
