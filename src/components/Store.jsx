import React from "react";
import { motion } from "framer-motion";

const Store = () => {
  // Sample product data - replace with your actual products
  const products = [
    {
      id: 1,
      name: "VOLUME 1 PACK",
      price: 29.99,
      description: "Essential thumbnail elements for Minecraft creators",
      features: ["50+ PSD files", "Customizable layers", "4 color variants"]
    },
    {
      id: 2,
      name: "LIGHTING KIT",
      price: 19.99,
      description: "Premium lighting effects for dramatic thumbnails",
      features: ["12 light presets", "Adjustable intensity", "Blend modes"]
    },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-[112rem] mx-auto py-20 md:py-32">
        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="neue text-2xl font-[500] mb-3">MY STORE</p>
            <h1 className="neue text-[12vw] md:text-[10vw] font-[500] leading-none tracking-tight">
              GFX<br />PACKS
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
                transition: { duration: 0.6, delay: index * 0.1 }
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="border border-black p-6 hover:bg-black hover:text-white transition-colors duration-300 group"
            >
              <div className="h-64 bg-gray-100 mb-6 group-hover:bg-gray-800 transition-colors duration-300">
                {/* Placeholder for product image */}
                <div className="w-full h-full flex items-center justify-center">
                  <span className="neue text-gray-400 group-hover:text-gray-500 text-lg">
                    PREVIEW IMAGE
                  </span>
                </div>
              </div>
              
              <h3 className="neue text-3xl font-[500] mb-3">{product.name}</h3>
              <p className="neue text-xl mb-4">{product.description}</p>
              
              <div className="space-y-2 mb-6">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <span className="neue mr-2">•</span>
                    <p className="neue">{feature}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <p className="neue text-2xl font-[500]">${product.price}</p>
                <button className="bg-black text-white px-6 py-3 neue font-[500] group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  ADD TO CART
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