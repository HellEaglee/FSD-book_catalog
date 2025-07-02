export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <div>
      {label && (
        <label className="text-[16px] text-primary font-bold">{label}</label>
      )}
      <div className="flex items-center relative">
        <input disabled={props.disabled} {...props} />
      </div>
    </div>
  );
};
