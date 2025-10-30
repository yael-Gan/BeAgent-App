import React from "react";

function PopularCategories({ categories }) {
  return (
    <section className="max-w-6xl mx-auto mb-12">
      <h2 className="text-3xl font-bold text-primaryBlue  mb-6 text-center">קטגוריות פופולריות</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="relative rounded overflow-hidden cursor-pointer transform hover:scale-105 transition"
          >
            <img src={cat.img} className="w-full h-32 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <span className="text-white font-bold text-lg">{cat.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularCategories;
