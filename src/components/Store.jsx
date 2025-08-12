import React from "react";
import { motion } from "framer-motion";

const Store = () => {
  const products = [
    // Saturate Design Packs
    {
      id: 1,
      name: "SATURATE PACK - DEMO",
      price: 0.00,
      description: "Free demo version to try basic features",
      features: ["Limited assets", "Watermarked", "Basic functionality"],
      status: "coming-soon"
    },
    {
      id: 2,
      name: "SATURATE PACK - BEGINNER",
      price: 15.00,
      description: "Perfect for those starting with thumbnail design",
      features: ["Extended asset library", "No watermark", "Beginner-friendly"],
      status: "coming-soon"
    },
    {
      id: 3,
      name: "SATURATE PACK - PRO",
      price: 50.00,
      description: "Everything you need for professional thumbnails",
      features: ["Complete asset collection", "Advanced tools", "Regular updates"],
      status: "coming-soon"
    },
    
    // Advanced PSD Packs
    {
      id: 4,
      name: "ADVANCED PSD PACK 1",
      price: 30.00,
      description: "Two advanced PSD templates for professional creators",
      features: ["2 premium PSDs", "Fully layered", "Customizable elements"],
      status: "coming-soon"
    },
    {
      id: 5,
      name: "ADVANCED PSD PACK 2",
      price: 30.00,
      description: "Two more advanced PSD templates for stunning thumbnails",
      features: ["2 premium PSDs", "Smart objects", "Multiple variants"],
      status: "coming-soon"
    },
    
    // Basic PSD Packs
    {
      id: 6,
      name: "BASIC PSD PACK 1",
      price: 15.00,
      description: "Simple but effective PSD templates for beginners",
      features: ["2 basic PSDs", "Easy to customize", "Clear instructions"],
      status: "coming-soon"
    },
    {
      id: 7,
      name: "BASIC PSD PACK 2",
      price: 15.00,
      description: "More straightforward templates for quick thumbnails",
      features: ["2 basic PSDs", "Minimal layers", "Quick setup"],
      status: "coming-soon"
    }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-[112rem] mx-auto py-20 md:py-32">
        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="neue text-2xl font-[500] mb-3 mt-20">MY STORE</p>
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
              className={`border border-black p-6 hover:bg-black hover:text-white transition-colors duration-300 group relative ${
                product.status === 'coming-soon' ? 'opacity-75' : ''
              }`}
            >
              {product.status === 'coming-soon' && (
                <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 neue font-[500] text-sm">
                  COMING SOON
                </div>
              )}
              
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
                <p className="neue text-2xl font-[500]">
                  {product.price === 0 ? 'FREE' : `$${product.price.toFixed(2)}`}
                </p>
                <button 
                  className={`bg-black text-white px-6 py-3 neue font-[500] group-hover:bg-white group-hover:text-black transition-colors duration-300 ${
                    product.status === 'coming-soon' ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={product.status === 'coming-soon'}
                >
                  {product.status === 'coming-soon' ? 'UNAVAILABLE' : 'ADD TO CART'}
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