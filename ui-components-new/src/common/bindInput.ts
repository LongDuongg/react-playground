type BindInputProps = {
  value: string;
  onChange: (v: string) => void;
};

export const bindInput = ({ value, onChange }: BindInputProps) => {
  return {
    value: value || "",
    onChange: (e: any) => onChange(e.target.value),
  };
};
