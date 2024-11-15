import { Link } from "react-router-dom";

const FormContainer = props => {
  const { children } = props;
  return (
    <div className="flex h-screen">
      <div className="relative hidden md:flex">
        <img
          className="object-cover"
          src="https://static-task-assets.react-formula.com/capstone_sign_in_scene.png"
        />
        <div className="absolute left-0 top-0 h-full w-full bg-black/10"></div>
        <div className="absolute left-0 top-0 h-full w-full bg-green-800/40"></div>
      </div>
      <div className="flex-1 bg-green-50 p-10 text-black flex flex-col items-center justify-center">
        <img
          className="w-20"
          src="https://static-task-assets.react-formula.com/capstone_logo_dark.png"
        />
        <div className="text-4xl text-green-700 font-playfair mb-16">Rica's Plants</div>
        {children}
      </div>
    </div>
  );
};

export default FormContainer;
