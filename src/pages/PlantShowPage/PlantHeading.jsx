const PlantHeading = props => {
  const { name, price, botanical_name } = props.plant;
  return (
    <div>
      <div className="flex justify-between items-end">
        <div className="text-xl lg:text-4xl text-emerald-700 font-playfair">{name}</div>
        <div className="text-lg lg:text-2xl text-emerald-600">${price}</div>
      </div>
      <div className="mt-2 text-neutral-600 italic text-lg mb-4">{botanical_name}</div>
    </div>
  );
};

export default PlantHeading;
