import { ColorRing } from "react-loader-spinner";
import { LoaderWrapper } from "./styled";

export default function Loader() {
    return (
        <LoaderWrapper>
            <ColorRing
                visible={true}
                height="100"
                width="100"
                colors={['#E0A449', '#E0A449', '#E0A449', '#E0A449', '#E0A449']}
            />
        </LoaderWrapper>
    )
}