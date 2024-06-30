import { ClipLoader } from "react-spinners";
import { LoaderWrapper } from "./styled";
import { LOADER_SIZE } from "@constants/const";
import { useTheme } from "styled-components";

export default function Loader() {
    const theme = useTheme();

    return (
        <LoaderWrapper data-testid="loader">
            <ClipLoader color={theme.colors.secondary} size={LOADER_SIZE} />
        </LoaderWrapper>
    )
}