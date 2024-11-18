import { useContext } from "react";
import SessionContext from "context/SessionContext";
import { motion } from "framer-motion";
const MobileModal = props => {
  const { userName, signOut } = useContext(SessionContext);
  const { onCartOpenClick } = props;
  return (
    <motion.div
      initial={{ translateY: "-100%" }}
      animate={{ translateY: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-emerald-600 flex w-72 h-48 pl-10 py-10 flex-col items-start justify-between p-3 text-white"
    >
      <div>
        <i className="fa-solid fa-user mr-2"></i>
        {userName}
      </div>
      <button onClick={signOut}>
        <i className="fa-solid fa-right-to-bracket mr-2"></i>sign out
      </button>
      <button
        onClick={() => {
          onCartOpenClick();
        }}
      >
        <i className="fa-solid fa-cart-shopping mr-2"></i>cart
      </button>
    </motion.div>
  );
};

export default MobileModal;
