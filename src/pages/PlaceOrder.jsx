import { useContext } from "react";
import CartTotal from "../Components/CartTotal";
import Title from "../Components/Title";
import { ShopContext } from "../context/ShopContext";

function PlaceOrder() {

  const { navigate } = useContext(ShopContext); 

  return (
    <div className="flex flex-col sm:flex-row justify-around gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* ----------------- Left Side ------------------ */}

      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>

        {/* ----------------- Inputs ------------------ */}

        <input
          required
          type="text"
          placeholder="Full Name"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
        <input
          required
          type="number"
          placeholder="Phone"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
        <input
          required
          type="text"
          placeholder="Color Of The Hoodie"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
        <textarea
          autoComplete="off"
          className="border-gray-400 hover:border-gray-700 transition duration-300 border rounded-[4px] w-full h-40"
          placeholder="Any Additional Information"
        ></textarea>
      </div>

      {/* ----------------- Right Side ------------------ */}

      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="w-full text-end mt-8">
            <button onClick={() => navigate("/orders")} className="bg-black text-white text-sm px-16 py-3">PLACE ORDER</button>
          </div>
      </div>

    </div>
  );
}

export default PlaceOrder;
