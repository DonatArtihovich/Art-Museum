import { SelectHTMLAttributes } from "react";
import { ErrorText, SelectOption, SelectWrapper } from "./styled";
import { sortingOptions } from "@constants/const";

type SelectProps = {
    error: string | undefined;
} & SelectHTMLAttributes<HTMLSelectElement>

export function SearchSelect(props: SelectProps) {
    return (
        <SelectWrapper {...props} data-testid='search-select'>
            {sortingOptions.map(option =>
                <SelectOption
                    value={option.value}
                    key={option.value}
                >
                    {option.title}
                </SelectOption>)}
            {props.error && <ErrorText>{props.error}</ErrorText>}
        </SelectWrapper >
    )
}