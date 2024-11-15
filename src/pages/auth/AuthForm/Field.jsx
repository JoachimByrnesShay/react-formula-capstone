const Field = props => {
  const { label, type, value, onChange } = props;
  return (
    <>
      <div
        key={label}
        className="flex flex-col mb-4 text-stone-500"
      >
        <label
          className="ml-1 mb-1"
          htmlFor={label}
        >
          {label}
        </label>
        <input
          id={label}
          className="px-2 py-1 bg-stone-50 border border-stone-300 rounded-lg"
          type={type}
          value={value}
          onChange={onChange}
          autoComplete={label.includes("password") ? "new-password" : "username"}
        />
      </div>
    </>
  );
};
export default Field;
