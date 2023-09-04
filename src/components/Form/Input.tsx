import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  IconButton,
  InputAdornment,
  StackProps,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { memo, useState } from "react";

type InputProps = {
  name: string;
  value?: string | undefined;
  error?: string;
  required?: boolean;
  containerProps?: StackProps;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onChangeText?: (name: string, text?: string) => void;
} & Omit<TextFieldProps, "error" | "onChangeText">;

const Input = (props: InputProps) => {
  const {
    label = "Input",
    name,
    value: valueProps,
    error,
    onChange: onChangeProps,
    onChangeText,
    onSubmit,
    type = "text",
    ...rest
  } = props;

  const [show, setShow] = useState(false);
  const [value, setValue] = useState(valueProps);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    let newValue = event.target.value;
    onChangeText && onChangeText(newValue);
    setValue(newValue);
    onChangeProps && onChangeProps(event);
  };

  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      helperText={error}
      error={!!error}
      onChange={onChange}
      type={type === "password" && show ? "text" : type}
      onSubmit={onSubmit ? onSubmit : () => {}}
      InputLabelProps={{
        sx: {
          fontWeight: "500",
        },
      }}
      InputProps={{
        endAdornment:
          type === "password" && value ? (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShow((show) => !show)}
                edge="end"
                size="small"
                color="info"
              >
                {show ? (
                  <VisibilityOff fontSize="inherit" />
                ) : (
                  <Visibility fontSize="inherit" />
                )}
              </IconButton>
            </InputAdornment>
          ) : null,
        sx: error ? { borderColor: "error.main" } : undefined,
      }}
      {...rest}
    />
  );
};

export default memo(Input);
