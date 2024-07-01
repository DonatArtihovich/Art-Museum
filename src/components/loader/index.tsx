import { LOADER_SIZE } from "@constants/const";
import { ClipLoader } from "react-spinners";
import { useTheme } from "styled-components";

import { LoaderWrapper } from "./styled";

export default function Loader() {
    const theme = useTheme();

    return (
        <LoaderWrapper data-testid="loader">
            <ClipLoader color={theme.colors.secondary} size={LOADER_SIZE} />
        </LoaderWrapper>
    )
}