type bindInput = {
  value?: string;
  onChange: (e: any) => void;
};

export const bindInput = ({ value, onChange }: bindInput) => {
  return {
    value: value || "",
    onChange: (e: any) => onChange(e.target.value),
  };
};
