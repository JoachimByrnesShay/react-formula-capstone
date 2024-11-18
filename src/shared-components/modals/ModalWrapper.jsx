import { RemoveScroll } from "react-remove-scroll";
import { useRef } from "react";
import { motion } from "framer-motion";

const ModalWrapper = props => {
  const backgroundRef = useRef();
  const onClose = props.onClose;
  const { children, isOpen, onCloseClick } = props;

  return !isOpen ? null : (
    <RemoveScroll>
      <div
        ref={backgroundRef}
        className="absolute top-0 left-0 flex justify-end w-screen items-start h-screen bg-black/30 backdrop-blur-sm"
        onClick={e => {
          if (e.target === backgroundRef.current) {
            onCloseClick();
          }
        }}
      >
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute top-0 right-0 p-2 z-10"
          onClick={e => {
            e.preventDefault();
            onCloseClick();
          }}
        >
          <i className="text-5xl fa-regular fa-circle-xmark text-emerald-300"></i>
        </motion.button>

        {children}
      </div>
    </RemoveScroll>
  );
};

export default ModalWrapper;
