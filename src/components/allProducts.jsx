import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import AllProduct from "./allProduct";
import Loader from "./loader";
import Pagination from "./Pagination";

let PageSize = 8;

const AllProducts = () => {
  const { isloading, cards } = useSelector((state) => state.cards);
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return cards.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, cards]);

  if (isloading) {
    return <Loader />;
  }

  return (
    <>
      <div className="row">
        {currentTableData.map((product, i) => (
          <AllProduct key={i} product={product} />
        ))}
      </div>
      <div className='pagination-wrapper'>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={cards.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </>
  );
};

export default AllProducts;
