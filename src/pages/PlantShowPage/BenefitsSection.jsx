import clsx from "clsx";

const BenefitsSection = props => {
  const { icon, title, description } = props;

  return (
    <div className="flex flex-col items-center flex-1 px-8">
      <i className={clsx("text-4xl text-emerald-700 mb-2", icon)}></i>
      <div className="text-neutral-900 mb-2">{title}</div>
      <p className="text-center text-sm text-neutral-600">{description}</p>
    </div>
  );
};

export default BenefitsSection;
