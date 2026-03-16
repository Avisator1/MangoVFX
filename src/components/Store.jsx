import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { products } from "../data/products";

const Store = () => {
  const navigate = useNavigate();

  const handleOpenProduct = (slug, isDisabled) => {
    if (isDisabled) return;
    navigate(`/shop/${slug}`);
  };

  return (
    <div className="bg-white">
      <div className="max-w-[112rem] px-4 mx-auto py-20 md:py-32">
        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="neue text-2xl font-[500] mb-3 mt-20">MY STORE</p>
            <h1 className="neue text-[12vw] md:text-[10vw] font-[500] leading-none tracking-tight">
              GFX
              <br />MARKET
            </h1>
          </div>
          <p className="neue text-xl md:text-2xl max-w-md text-right">
            Premium design assets to elevate your thumbnails instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: index * 0.1 },
              }}
              viewport={{ once: true, margin: "-50px" }}
              className={`border border-black p-8 py-12 rounded-xl hover:bg-[#e1794a] hover:text-white transition-colors duration-300 group relative cursor-pointer ${
                product.status === "coming-soon" ? "opacity-75" : ""
              }`}
              onClick={() =>
                handleOpenProduct(product.slug, product.status === "coming-soon")
              }
            >
              {product.status === "coming-soon" && (
                <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 neue font-[500] text-sm rounded-full">
                  COMING SOON
                </div>
              )}

              <h3 className="neue text-3xl font-[500] mb-3">{product.name}</h3>
              <p className="neue text-xl mb-2">{product.description}</p>
              {product.shortTagline && (
                <p className="neue text-base text-gray-500 mb-4 group-hover:text-gray-100">
                  {product.shortTagline}
                </p>
              )}

              <div className="space-y-2 mb-6">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <span className="neue mr-2">•</span>
                    <p className="neue">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <p className="neue text-2xl font-[500]">
                  {product.price === 0 ? "FREE" : `$${product.price.toFixed(2)}`}
                </p>
                <button
                  type="button"
                  className={`bg-black text-white px-6 py-3 neue font-[500] group-hover:bg-white group-hover:text-black transition-colors duration-300 rounded-xl ${
                    product.status === "coming-soon"
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenProduct(
                      product.slug,
                      product.status === "coming-soon"
                    );
                  }}
                  disabled={product.status === "coming-soon"}
                >
                  {product.status === "coming-soon" ? "UNAVAILABLE" : "VIEW DETAILS"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
