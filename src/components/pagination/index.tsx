import imagesObj from "@constants/images";
import {
    ActivePageNumber,
    ArrowButton,
    LeftPaginationArrowImage,
    NumbersWrapper,
    PageNumber,
    PaginationWrapper,
    RightPaginationArrowImage
} from "./styled";
import { FIRST_PAGE } from "@constants/const";

type PaginationProps = {
    page: number;
    setPage: (page: number) => void;
    totalPages: number;
}

export const Pagination = ({ page, setPage, totalPages }: PaginationProps) => (
    <PaginationWrapper>
        {page > FIRST_PAGE &&
            <ArrowButton onClick={() => setPage(page - 1)} data-testid="left-arrow">
                <LeftPaginationArrowImage src={imagesObj.arrowIcon} />
            </ArrowButton>}
        <NumbersWrapper>
            {Array.from({ length: totalPages < 4 ? totalPages : 4 }).map((_, idx) => {
                const number = Math.floor((page - 1) / 4) * 4 + idx + 1;

                return number !== page
                    ? <PageNumber
                        key={number}
                        onClick={() => setPage(number)}
                    >
                        {number}
                    </PageNumber>
                    : <ActivePageNumber key={number}>{number}</ActivePageNumber>
            })}
        </NumbersWrapper>
        {page < totalPages &&
            <ArrowButton onClick={() => setPage(page + 1)} data-testid='right-arrow'>
                <RightPaginationArrowImage src={imagesObj.arrowIcon} />
            </ArrowButton>
        }
    </PaginationWrapper>
)
