import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import RelatedProducts from "../Components/RelatedProducts";
import SizeChart from "../Components/SizeChart";

function Product() {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setIamge] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setIamge(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}

      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Image */}

        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setIamge(item)}
                src={item}
                key={index}
                alt="Product-Image"
                className="w-[20%] sm:w-[70%] sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>
          <div className="w-[85%] sm:w-[58%] mx-auto">
            <img src={image} alt="Product-Image" className="w-full h-auto" />
          </div>
        </div>

        {/* --------- Product Info ----------- */}

        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <p className="mt-5 text-2xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>

          {/* --------- Select Size ----------- */}

          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 ${
                    item === size ? "bg-black text-gray-100" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <SizeChart />

          {/* --------- Select Color ----------- */}

          <div className="flex flex-col gap-4 my-8">
            <p>Color Available</p>
            <div className="flex gap-2">
              {productData.color.map((item, index) => (
                <button
                  onClick={() => setColor(item)}
                  className={`border py-2 px-4 ${
                    item === color ? "bg-black text-gray-100" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>
        </div>
      </div>

      {/* ---------- Display related products ------------- */}

      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}

export default Product;
