import { ClipLoader } from "react-spinners";
import { LoaderWrapper } from "./styled";

export default function Loader() {
    return (
        <LoaderWrapper data-testid="loader">
            <ClipLoader color="var(--secondary-color)" size={50} />
        </LoaderWrapper>
    )
}