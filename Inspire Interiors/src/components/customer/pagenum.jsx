import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const PageNum = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination>
      <Pagination.First onClick={() => onPageChange(1)} />
      <Pagination.Prev
        onClick={() => {
          if (currentPage > 1) {
            onPageChange(currentPage - 1);
          }
        }}
      />

      {pageNumbers.map((pageNumber) => (
        <Pagination.Item
          key={pageNumber}
          active={pageNumber === currentPage}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </Pagination.Item>
      ))}

      <Pagination.Next
        onClick={() => {
          if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
          }
        }}
      />
      <Pagination.Last onClick={() => onPageChange(totalPages)} />
    </Pagination>
  );
};

export default PageNum;
