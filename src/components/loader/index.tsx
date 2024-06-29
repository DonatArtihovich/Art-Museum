import { ClipLoader } from "react-spinners";
import { LoaderWrapper } from "./styled";
import { LOADER_SIZE } from "@constants/const";

export default function Loader() {
    return (
        <LoaderWrapper data-testid="loader">
            <ClipLoader color="var(--secondary-color)" size={LOADER_SIZE} />
        </LoaderWrapper>
    )
}