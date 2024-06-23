import { SelectHTMLAttributes } from "react";
import { ErrorText, SelectOption, SelectWrapper } from "./styled";

export function SearchSelect(props: SelectHTMLAttributes<HTMLSelectElement> &
{
    error: string | undefined;
}
) {
    return (
        <SelectWrapper {...props}>
            <option>Choose sorting</option>
            <SelectOption value="artist">By artists</SelectOption>
            <SelectOption value="date">By date</SelectOption>
            {props.error && <ErrorText>{props.error}</ErrorText>}
        </SelectWrapper>
    )
}