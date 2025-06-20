import classNames from "classnames";

type PaginationProps = {currentPage: number; onChange: (v: number) => void; totalPages: number};

export const Pagination = ({currentPage, onChange, totalPages}: PaginationProps) => {
  const pages = getPages(totalPages, currentPage);

  return (
    <ul className="pagination">
      <li
        className={classNames("page-item", {disabled: currentPage === 0})}
        style={{cursor: "pointer"}}
        onClick={() => {
          onChange(currentPage - 1);
        }}
      >
        <a className="page-link">
          <i className="ion-arrow-left-b"></i>
        </a>
      </li>
      {pages.map((page, i) => (
        <li
          key={i}
          className={classNames("page-item", {active: page === currentPage})}
          style={{cursor: "pointer"}}
          onClick={() => {
            if (page === currentPage) {
              return;
            }
            if (page === "...") {
              onChange(currentPage + 2);
            } else {
              onChange(page as number);
            }
          }}
        >
          <a className="page-link" style={{cursor: "pointer"}}>
            {page === "..." ? "..." : (page as number) + 1}
          </a>
        </li>
      ))}
      <li
        className={classNames("page-item", {disabled: currentPage === totalPages - 1})}
        style={{cursor: "pointer"}}
        onClick={() => {
          onChange(currentPage + 1);
        }}
      >
        <a className="page-link">
          <i className="ion-arrow-right-b"></i>
        </a>
      </li>
    </ul>
  );
};

const getPages = (total: number, current: number) => {
  if (total < 7) {
    return new Array(total).fill(0).map((_, i) => i);
  }
  if (current < 5) {
    return [...new Array(Math.max(current + 1 + 1, 3)).fill(0).map((_, i) => i), "...", total - 3, total - 2, total - 1];
  }

  if (current <= total - 6) {
    return [0, 1, 2, "...", current - 1, current, current + 1, "...", total - 3, total - 2, total - 1];
  }

  return [
    0,
    1,
    2,
    "...",
    ...new Array(Math.max(total - current + 1 + 1, 3))
      .fill(0)
      .map((_, i) => total - i - 1)
      .reverse(),
  ];
};
