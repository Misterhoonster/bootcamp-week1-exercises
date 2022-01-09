import React from "react";
import { StyledInput } from "./styles";

const FormInput = ({ value, setValue, placeholder }) => (
    <StyledInput value={value} placeholder={placeholder} onChange={(e) => {setValue(e.target.value)}} />
);

export default FormInput;