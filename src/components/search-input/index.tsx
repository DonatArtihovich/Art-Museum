import { InputHTMLAttributes } from "react";
import { SearchInputWrapper, SearchInput, SearchImage } from "./styled";
import searchImage from '@assets/images/search.svg'

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <SearchInputWrapper>
            <SearchInput {...props} />
            <SearchImage src={searchImage} />
        </SearchInputWrapper>
    )
}