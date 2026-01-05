import React from "react";

const Preview = ({ blog ,layout='single'}) => {
  const fallbackImage = "https://res.cloudinary.com/dkn6an4bw/image/upload/v1765786271/vecteezy_scenic-lake-landscape-with-trees-and-clouds-under-a-blue-sky_70377558_t7e31v.jpg";
  const isGrid = layout === "grid";
  return (
    <div className={
      isGrid
        ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        : "flex flex-col gap-6"
    }
>
      {blog.map((blogs, index) => (
        <div
          key={index}
          className="bg-[#0F172A] rounded-2xl shadow-lg overflow-hidden border border-white/10 flex flex-col"
        >
          <div className="px-5 py-3 border-b border-white/10">
            <h1 className="text-white text-lg font-semibold tracking-wide">
              👀 Preview
            </h1>
          </div>

          <div className="p-5 space-y-3 flex-1">
            <h2 className="text-xl font-bold text-white leading-snug line-clamp-2">
              {blogs?.title}
            </h2>

            <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
              {blogs?.descritpion}
            </p>
          </div>

          {blogs?.image && (
            <div className="px-5 pb-5">
              <img
                src={blogs.image}
                alt="Blog Preview"
                className="w-full h-44 object-cover rounded-xl border border-white/10"
                onError={(e) => {
                  e.currentTarget.src = fallbackImage;
                }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Preview;
