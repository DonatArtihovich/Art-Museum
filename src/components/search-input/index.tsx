import imagesObj from "@constants/images";
import { InputHTMLAttributes } from "react";

import {
    ErrorText,
    SearchButton,
    SearchImage,
    SearchInput,
    SearchInputWrapper,
    Wrapper} from "./styled";

type InputProps = {
    error: string | undefined;
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({ error, ...props }: InputProps) => {
    return (
        <Wrapper>
            <SearchInputWrapper>
                <SearchInput {...props} data-testid="search-input" />
                <SearchButton type='submit'>
                    <SearchImage src={imagesObj.searchIcon} />
                </SearchButton>
            </SearchInputWrapper>
            {error && <ErrorText>{error}</ErrorText>}
        </Wrapper >
    )
}