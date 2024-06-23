import { InputHTMLAttributes } from "react";
import { SearchInputWrapper, SearchInput, SearchImage, SearchButton, Wrapper, ErrorText } from "./styled";
import searchImage from '@assets/images/search.svg'

export const Input = ({ error, ...props }: InputHTMLAttributes<HTMLInputElement> &
{
    error: string | undefined;
}) => {
    return (
        <Wrapper>
            <SearchInputWrapper>
                <SearchInput {...props} />
                <SearchButton type='submit'>
                    <SearchImage src={searchImage} />
                </SearchButton>
            </SearchInputWrapper>
            {error && <ErrorText>{error}</ErrorText>}
        </Wrapper >
    )
}