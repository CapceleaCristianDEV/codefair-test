import { FC } from "react";
import { numberToArray } from "helpers/numberToArray";
import * as Styles from "./Pagination.styles";

interface Props {
  currentPage: number;
  pages: number;
  onChange: (page: number) => void;
}

export const Pagination: FC<Props> = ({ currentPage, pages, onChange }) => {
  const pageItems = numberToArray(pages);
  return (
    <Styles.PaginationWrapper>
      {pageItems.map((page) => {
        return (
          <Styles.PaginationItem
            key={page}
            activepage={(currentPage === page).toString()}
            onClick={() => onChange(page)}
          >
            {page}
          </Styles.PaginationItem>
        );
      })}
    </Styles.PaginationWrapper>
  );
};
