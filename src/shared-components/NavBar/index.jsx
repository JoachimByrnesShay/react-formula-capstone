import SessionContext from "context/SessionContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartModal from "shared-components/modals/CartModal";
const NavBar = () => {
  const { userName, signOut } = useContext(SessionContext);
  const [isLogoutMenuOpen, setIsLogoutMenuOpen] = useState(false);
  const [cartModalOpen, setCartModalOpen] = useState(false);
  return (
    <nav
      className="flex px-10 py-4 justify-center bg-emerald-800 font-lato h-[110px]"
      onMouseLeave={() => isLogoutMenuOpen && setIsLogoutMenuOpen(false)}
    >
      <div className="flex items-center w-full max-w-5xl justify-between text-emerald-100 p-4">
        <Link to="/plants">
          <div className="flex flex-row m:flex-col items-center font-playfair text-white text-2xl">
            <img
              className="w-10 mr-2"
              src="https://static-task-assets.react-formula.com/capstone_logo_light.png"
            />
            <div className="text-3xl"> Rica's Plants</div>
          </div>
        </Link>

        <div className="relative flex flex-1 justify-end">
          <button
            onClick={() => {
              setIsLogoutMenuOpen(!isLogoutMenuOpen);
            }}
            className="flex items-center text-xl text-emerald-200 mr-3"
          >
            <i className="fa-solid fa-user mr-2"></i>
            <div>{userName}</div>
          </button>
          {isLogoutMenuOpen && (
            <button onClick={signOut}>
              <div className="absolute flex items-center top-9 right-0 px-2 py-4 bg-emerald-100 text-emerald-900 rounded-lg border border-emerald-900">
                <i className="fa-solid fa-right-from-bracket"></i>
                sign out
              </div>
            </button>
          )}
        </div>
        <button
          className="p-0 flex items-baseline text-xl"
          onClick={() => setCartModalOpen(true)}
        >
          <i className="fa-solid fa-cart-shopping ml-2 s:ml-10 mr-1 text-emerald-200"></i>
          <div className="text-emerald-200">cart</div>
        </button>
      </div>
      {cartModalOpen && <CartModal onClose={() => setCartModalOpen(false)} />}
    </nav>
  );
};

export default NavBar;
