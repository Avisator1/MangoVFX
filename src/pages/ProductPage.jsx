import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/FooterBlack";
import { findProductBySlug } from "../data/products";

const ProductPage = () => {
  const { productSlug } = useParams();
  const product = findProductBySlug(productSlug);

  if (!product) {
    return (
      <div className="bg-white min-h-screen flex flex-col">
        <div className="mx-auto w-full">
          <Navbar />
        </div>
        <main className="flex-1 max-w-[72rem] mx-auto px-4 py-24 text-center">
          <h1 className="neue text-4xl md:text-5xl font-[500] mb-4">
            Product not found
          </h1>
          <p className="neue text-lg mb-8">
            The product you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center px-6 py-3 border border-black rounded-xl neue font-[500] hover:bg-black hover:text-white transition-colors duration-300"
          >
            Back to shop
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const isComingSoon = product.status === "coming-soon";

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <div className="mx-auto w-full">
        <Navbar />
      </div>

      <main className="flex-1 max-w-[90rem] mx-auto px-4 py-16 md:py-24">
        <div className="mb-8 md:mb-12 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              to="/shop"
              className="neue text-sm md:text-base uppercase tracking-wide underline-offset-4 hover:underline"
            >
              Back to shop
            </Link>
            {isComingSoon && (
              <span className="neue text-xs md:text-sm px-3 py-1 rounded-full bg-yellow-400 text-black font-[500]">
                Coming soon
              </span>
            )}
          </div>
          <p className="neue text-sm md:text-base text-gray-500">
            Digital download · PSD / design assets
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl border border-black bg-black">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={product.heroImage}
                  alt={product.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {product.gallery && product.gallery.length > 0 && (
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {product.gallery.map((src, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-xl border border-black/40"
                  >
                    <img
                      src={src}
                      alt={`${product.name} preview ${index + 1}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div>
              <p className="neue text-xs md:text-sm tracking-[0.25em] uppercase mb-3">
                MangoVFX · Product
              </p>
              <h1 className="neue text-4xl md:text-5xl lg:text-6xl font-[500] leading-tight mb-3">
                {product.name}
              </h1>
              {product.shortTagline && (
                <p className="neue text-lg md:text-xl text-gray-600 max-w-xl">
                  {product.shortTagline}
                </p>
              )}
            </div>

            <div className="flex items-end gap-6">
              <div>
                <p className="neue text-sm uppercase tracking-[0.2em] mb-1">
                  Price
                </p>
                <p className="neue text-3xl md:text-4xl font-[500]">
                  {product.price === 0 ? "FREE" : `$${product.price.toFixed(2)}`}
                </p>
              </div>

              <div className="flex-1">
                <button
                  type="button"
                  disabled={isComingSoon}
                  className={`w-full md:w-auto inline-flex items-center justify-center px-8 py-3 rounded-xl neue font-[500] border border-black transition-colors duration-300 ${
                    isComingSoon
                      ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                      : "bg-black text-white hover:bg-white hover:text-black"
                  }`}
                >
                  {isComingSoon ? "Unavailable · Coming soon" : "Add to cart"}
                </button>
                {isComingSoon && (
                  <p className="neue text-xs text-gray-500 mt-2">
                    This pack is not yet available, but you can preview what
                    will be included.
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="neue text-lg font-[500] uppercase tracking-[0.2em]">
                What&apos;s inside
              </h2>
              <p className="neue text-base md:text-lg text-gray-700 mb-2">
                {product.description}
              </p>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="neue mr-2 mt-[2px]">•</span>
                    <p className="neue text-base text-gray-800">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-black/10 pt-6 space-y-3">
              <h3 className="neue text-sm font-[500] uppercase tracking-[0.2em]">
                Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm neue text-gray-600">
                <p>Instant digital download</p>
                <p>Compatible with Adobe Photoshop</p>
                <p>Resolution optimized for YouTube thumbnails</p>
                <p>Non-refundable digital product</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductPage;

