import { InputHTMLAttributes } from "react";
import { SearchInputWrapper, SearchInput, SearchImage, SearchButton, Wrapper, ErrorText } from "./styled";
import searchImage from '@assets/images/search.svg'

export function Input(props: InputHTMLAttributes<HTMLInputElement> &
{
    onButtonClick: React.MouseEventHandler;
    error: string | undefined;
}) {
    return (
        <Wrapper>
            <SearchInputWrapper>
                <SearchInput {...props} />
                <SearchButton type='submit'>
                    <SearchImage src={searchImage} />
                </SearchButton>
            </SearchInputWrapper>
            {props.error && <ErrorText>{props.error}</ErrorText>}
        </Wrapper>
    )
}