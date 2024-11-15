import { useState } from "react";
import Field from "./Field";

const AuthForm = props => {
  const { fields, submitButtonLabel, handleSubmit } = props;
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState(() => {
    const initialState = {};
    for (let field of fields) {
      initialState[field.label] = "";
    }
    return initialState;
  });

  return (
    <form
      className="w-72 p-4 mt-6 rounded-lg border border-slate-200 bg-white font-lato"
      onSubmit={async e => {
        e.preventDefault();
        setLoading(true);
        await handleSubmit(values);
        setLoading(false);
      }}
    >
      {fields.map(field => (
        <Field
          key={field.label}
          label={field.label}
          type={field.type}
          value={values[field.label]}
          onChange={e => setValues({ ...values, [field.label]: e.target.value })}
        />
      ))}

      <button className="bg-teal-600 text-teal-50 py-2 w-full rounded-lg mt-3 relative flex justify-center">
        {submitButtonLabel}
        {loading && (
          <div className="absolute right-4">
            <i className="fa-solid fa-rotate-right animate-spin"></i>
          </div>
        )}
      </button>
    </form>
  );
};

export default AuthForm;
