import { useContext, useEffect, useState } from "react";
import SessionContext from "context/SessionContext";
// import { RemoveScroll } from "react-remove-scroll";
import CartItem from "./CartItem";
import * as cartServices from "services/cart";
import LoadingSpinner from "shared-components/LoadingSpinner";
import { motion } from "framer-motion";

const CartModal = props => {
  // const backgroundRef = useRef();
  // const { onClose } = props;
  const { userName } = useContext(SessionContext);
  const [cartItems, setCartitems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log("these are cart items in modal: ", cartItems);
  const fetchCart = async () => {
    setIsLoading(true);
    const response = await cartServices.getCart();
    const data = await response.json();
    setCartitems(data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchCart();
  }, []);
  const onDelete = async ({ itemId }) => {
    await cartServices.deleteFromCart({ itemId });
    await fetchCart();
  };
  let itemsCount = 0;
  let totalCost = 0;
  for (let cart of cartItems) {
    itemsCount += cart.quantity;
    console.log(cart.price_per_unit * cart.quantity);
    totalCost += cart.quantity * cart.price_per_unit;
  }

  return (
    <motion.div
      initial={{ translateX: "100%" }}
      animate={{ translateX: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col w-full max-w-xl h-full bg-white"
    >
      <div className="flex justify-center items-center h-24 bg-green-800 shadow-sm">
        <div className="text-white text-3xl">{userName}&apos;s cart</div>
      </div>
      <div className="overflow-y-scroll flex flex-col flex-1">
        {isLoading ? (
          <div className="flex justify-center w-full">
            {" "}
            <LoadingSpinner />
          </div>
        ) : (
          cartItems.map((product, ix) => (
            <div
              key={ix}
              className="m-6"
            >
              <CartItem
                product={product}
                onDelete={onDelete}
              />
              {ix !== cartItems.length - 1 && (
                <div
                  key={ix}
                  className="h-[1px] bg-stone-300 w-full my-3"
                ></div>
              )}
            </div>
          ))
        )}
      </div>
      <div className="bg-stone-200 border-y-2 border-red-300 flex flex-col px-6 py-3">
        <div className="flex justify-between flex-1">
          <div>{itemsCount} items</div>
          <div>subtotal: ${totalCost}</div>
        </div>
        <button className="bg-emerald-700 flex justify-center items-center text-white py-3 rounded-full mt-3 mb-3">
          <div className="mr-2">Checkout</div>
          <i className="fa-solid fa-arrow-right-to-bracket"></i>
        </button>
      </div>
    </motion.div>
  );
};

export default CartModal;
