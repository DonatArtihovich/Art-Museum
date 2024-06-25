import { render, screen } from "@testing-library/react";
import { useParams } from "react-router-dom";
import { getArtwork } from "@utils/api";
import { ArtworkPageContent } from "./index";

jest.mock("@utils/api");
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: jest.fn()
}));

const mockGetArtwork = getArtwork as jest.Mock;
const mockUseParams = useParams as jest.Mock;

describe(ArtworkPageContent, () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("renders loader while fetching data", () => {
        mockUseParams.mockReturnValue({ id: "1" });
        mockGetArtwork.mockResolvedValueOnce({} as FullArtwork);

        render(<ArtworkPageContent />);

        expect(screen.getByTestId("loader")).toBeInTheDocument();
    });
});
