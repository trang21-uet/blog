"use client";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { ChangeEvent, FormEvent, memo, useState } from "react";

type InputProps = {
  error?: string;
  onChange?: () => void;
} & Omit<TextFieldProps, "error" | "onChange">;

const Input = (props: InputProps) => {
  const {
    label = "Input",
    name,
    value,
    error,
    onChange: onChangeProps,
    onSubmit,
    type = "text",
    ...rest
  } = props;

  const [show, setShow] = useState(false);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    onChangeProps && onChangeProps();
  };

  console.log(show);

  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      helperText={error}
      error={!!error}
      type={type === "password" && show ? "text" : type}
      onChange={onChange}
      onSubmit={onSubmit ? onSubmit : () => {}}
      InputLabelProps={{
        sx: {
          fontWeight: "700",
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
              >
                {show ? (
                  <VisibilityOff fontSize="inherit" />
                ) : (
                  <Visibility fontSize="inherit" />
                )}
              </IconButton>
            </InputAdornment>
          ) : (
            <></>
          ),
        sx: error ? { borderColor: "error.main" } : undefined,
      }}
      {...rest}
    />
  );
};

export default memo(Input);
