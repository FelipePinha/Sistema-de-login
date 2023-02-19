import { StyledInput } from "./styles";

export const Input = ({ placeholder, value, onChange, type }) => {
    return (
        <StyledInput
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            type={type}
        ></StyledInput>
    );
};
