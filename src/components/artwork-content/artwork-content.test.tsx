import { render, screen } from "@testing-library/react";
import { useFetch } from "@utils/react/hooks/use-fetch";
import { useParams } from "react-router-dom";

import { ArtworkPageContent } from "./index";

jest.mock("@utils/api");
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: jest.fn()
}));

const mockUseFetch = useFetch as jest.Mock;
const mockUseParams = useParams as jest.Mock;

describe(ArtworkPageContent, () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("renders loader while fetching data", () => {
        mockUseParams.mockReturnValue({ id: "1" });
        mockUseFetch.mockResolvedValueOnce({});

        render(<ArtworkPageContent />);

        expect(screen.getByTestId("loader")).toBeInTheDocument();
    });
});
