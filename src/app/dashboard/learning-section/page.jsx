"use client";

import Image from "next/image";
import React, { useState } from "react";

const videosData = [
  {
    id: 1,
    name: "What is Entrepreneurship?",
    thumbnail: "/video1.jpg",
    url: "https://www.youtube.com/watch?v=MdNNGfoxrqA",
  },
  {
    id: 2,
    name: "Become A Successful Entrepreneur",
    thumbnail: "/video2.jpg",
    url: "https://www.youtube.com/watch?v=eHJnEHyyN1Y",
  },
  {
    id: 3,
    name: "Entrepreneur vs Businessman",
    thumbnail: "/video3.jpg",
    url: "https://www.youtube.com/watch?v=lSHVwgg3LXg",
  },
  {
    id: 4,
    name: "Think Fast, Talk Small",
    thumbnail: "/video4.jpg",
    url: "https://www.youtube.com/watch?v=HAnw168huqA",
  },
  {
    id: 5,
    name: "20 Rules for Entrepreneurs",
    thumbnail: "/video5.jpg",
    url: "https://www.youtube.com/watch?v=R1UHp1SVe2k",
  },
  {
    id: 6,
    name: "Digital Entrepreneurship",
    thumbnail: "/video6.jpg",
    url: "https://www.youtube.com/watch?v=W32BuaMnUb8",
  },
];

const blogsData = [
  {
    id: 1,
    title: "Entrepreneurial Mindset",
    backgroundImage: "/blog1.jpg",
    url: "https://blog.hubspot.com/sales/entrepreneur-mindset",
  },
  {
    id: 2,
    title: "Successful Entrepreneurs",
    backgroundImage: "/blog2.jpg",
    url: "https://online.hbs.edu/blog/post/characteristics-of-successful-entrepreneurs",
  },
  {
    id: 3,
    title: "Fuel Your Journey",
    backgroundImage: "/blog3.jpg",
    url: "https://prelaunch.com/blog/startup-blogs",
  },
  {
    id: 4,
    title: "Leadership Lessons",
    backgroundImage: "/blog4.jpg",
    url: "https://eilm.edu.eu/blog/10-leadership-lessons-from-successful-entrepreneurs/",
  },
  {
    id: 5,
    title: "Success Stories",
    backgroundImage: "/blog5.jpg",
    url: "https://online.hbs.edu/blog/post/successful-entrepreneur-stories",
  },
  {
    id: 6,
    title: "Leadership Meets Entrepreneurship",
    backgroundImage: "/blog6.jpg",
    url: "https://www.abeuk.com/about-us/blog/leadership-meets-entrepreneurship",
  },
];

const booksData = [
  {
    id: 1,
    title: "Buy Back Your Time",
    author: "Dan Martell",
    image: "/book1.jpg",
    url: "https://www.amazon.com/Buy-Back-Your-Time-Unstuck/dp/B09YMNQ5HF/ref=zg_bs_g_2745_d_sccl_1/146-0724549-5524710?psc=1",
  },
  {
    id: 2,
    title: "Million Dollar Weekend",
    author: "Noah Kagan",
    image: "/book2.jpg",
    url: "https://www.amazon.com/Million-Dollar-Weekend-Surprisingly-7-Figure/dp/B0C6YF9YJX/ref=zg_bs_g_2745_d_sccl_2/146-0724549-5524710?psc=1",
  },
  {
    id: 3,
    title: "Nine Figure Mindset",
    author: "Brandon Dawson",
    image: "/book3.jpg",
    url: "https://www.amazon.com/Nine-Figure-Mindset-Zero-Million-Worth/dp/B0CMFH1QBT/ref=zg_bs_g_2745_d_sccl_15/146-0724549-5524710?psc=1",
  },
  {
    id: 4,
    title: "Secrets of Millionaire Mindset",
    author: "Charles Constant",
    image: "/book4.jpg",
    url: "https://www.amazon.com/Secrets-of-Millionaire-Mind-audiobook/dp/B01F7O1FKW/ref=zg_bs_g_2745_d_sccl_22/146-0724549-5524710?psc=1",
  },
  {
    id: 5,
    title: "Zero to One",
    author: "Peter Thiel",
    image: "/book5.jpg",
    url: "https://www.amazon.com/Zero-to-One-audiobook/dp/B00M284NY2/ref=zg_bs_g_2745_d_sccl_23/146-0724549-5524710?psc=1",
  },
  {
    id: 6,
    title: "Buy Then Build",
    author: "Walker Deibel",
    image: "/book6.jpg",
    url: "https://www.amazon.com/Buy-Then-Build-Acquisition-Entrepreneurs/dp/1544501137/ref=zg_bs_g_2745_d_sccl_37/146-0724549-5524710?psc=1",
  },
];

const page = () => {
  const [selectedOption, setSelectedOption] = useState("Videos");
  const [contentData, setContentData] = useState(videosData);

  const handleSidebarClick = (option) => {
    setSelectedOption(option);
    switch (option) {
      case "Videos":
        setContentData(videosData);
        break;
      case "Blogs":
        setContentData(blogsData);
        break;
      case "Books":
        setContentData(booksData);
        break;
      default:
        setContentData([]);
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="h-screen w-1/5 bg-gray-200">
        <h2 className="mb-4 py-4 text-center text-xl font-bold text-rgb-green">
          Learning Options
        </h2>
        <ul className="text-lg">
          <div className="flex px-5 py-5">
            <Image src={"/videos.svg"} width={30} height={30} />
            <li
              className={`ml-4 cursor-pointer ${selectedOption === "Videos" ? "font-bold" : ""}`}
              onClick={() => handleSidebarClick("Videos")}
            >
              Videos
            </li>
          </div>
          <div className="flex px-5 py-5">
            <Image src={"/blogs.svg"} width={30} height={30} />
            <li
              className={`ml-4 cursor-pointer ${selectedOption === "Blogs" ? "font-bold" : ""}`}
              onClick={() => handleSidebarClick("Blogs")}
            >
              Blogs
            </li>
          </div>

          <div className="flex px-5 py-5">
            <Image src={"/books.svg"} width={30} height={30} />
            <li
              className={`ml-4 cursor-pointer ${selectedOption === "Books" ? "font-bold" : ""}`}
              onClick={() => handleSidebarClick("Books")}
            >
              Books
            </li>
          </div>
        </ul>
      </div>

      {/* Content */}
      <div className="w-3/4 p-4">
        <h2 className="mb-4 text-2xl font-bold">Learning Content</h2>
        <div className="grid grid-cols-3 gap-4">
          {contentData.map((item) => (
            <div key={item.id} className="rounded-md bg-white p-4 shadow-md">
              {selectedOption === "Videos" && (
                <>
                  <img
                    src={item.thumbnail}
                    alt={item.name}
                    className="mx-auto mb-4 h-40"
                  />
                  <h3 className="mb-2 text-lg font-semibold">{item.name}</h3>
                  <a href={item.url} className="text-blue-500">
                    Watch Video
                  </a>
                </>
              )}
              {selectedOption === "Blogs" && (
                <>
                  <div
                    style={{
                      backgroundImage: `url(${item.backgroundImage})`,
                      height: "150px",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className="mb-2"
                  ></div>
                  <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                  <a href={item.url} className="text-blue-500">
                    Read Blog
                  </a>
                </>
              )}
              {selectedOption === "Books" && (
                <>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="mb-2 h-40 w-full object-cover"
                  />
                  <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                  <p className=" text-gray-500">Author: {item.author}</p>
                  <a href={item.url} className="mt-2 text-sm text-blue-500">
                    Get This Book
                  </a>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
