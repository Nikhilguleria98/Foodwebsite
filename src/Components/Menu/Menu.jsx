import React, { useState } from "react";
import MenuSection from "./MenuSection";
import Explore from "../Home/Explore";
import menuData from "./Menu.json";

const Menu = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // To keep track of the current page
  const [itemsPerPage] = useState(12); // Number of items to show per page
  const [pageInput, setPageInput] = useState(""); // To track the page number input

  // Filter menu data based on the selected filter
  const filteredMenuData =
    selectedFilter && menuData[selectedFilter]
      ? { [selectedFilter]: menuData[selectedFilter] } // Show only selected category
      : menuData; // Show all categories if no filter is selected

  // Pagination logic for each category
  const paginateItems = (items) => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return items.slice(indexOfFirstItem, indexOfLastItem);
  };

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setPageInput(""); // Clear the input when changing the page through buttons
  };

  // Handle previous and next button
  const handlePrevNext = (direction) => {
    if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === "next") {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle jumping to a specific page
  const handleJumpToPage = () => {
    const page = parseInt(pageInput, 10);
    if (page >= 1 && page <= Math.ceil(filteredMenuData[selectedFilter]?.length / itemsPerPage)) {
      setCurrentPage(page);
    } else {
      alert("Invalid page number");
    }
  };

  // Helper to generate pagination items with ellipsis
  const generatePagination = (totalPages) => {
    const pageNumbers = [];
    const maxPageButtons = 2; // Maximum number of page buttons to display
    
    if (totalPages <= maxPageButtons) {
      // If there are fewer pages than the max buttons, display all pages
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always show the first page
      pageNumbers.push(1); 
      
      // If current page is far from the beginning, show ellipsis
      if (currentPage > 3) pageNumbers.push('...');
      
      // Show a range of pages around the current page
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      
      // If the current page is not near the last page, show ellipsis
      if (currentPage < totalPages - 2) pageNumbers.push('...');
      
      // Always show the last page
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return (
    <div className="py-8 px-4 mt-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-orange-600">
        Explore Our Menu
      </h1>
      <Explore setSelectedFilter={setSelectedFilter} selectedFilter={selectedFilter} />

      {Object.entries(filteredMenuData).map(([category, items]) => {
        const paginatedItems = paginateItems(items); // Get the items for the current page

        const totalPages = Math.ceil(items.length / itemsPerPage);
        const paginationItems = generatePagination(totalPages);

        return (
          <div key={category}>
            <MenuSection category={category} items={paginatedItems} />

            {/* Pagination controls */}
            <div className="pagination-controls flex justify-center items-center space-x-2 mt-4 flex-wrap sm:flex-nowrap">
              {/* Previous button */}
              <button
                onClick={() => handlePrevNext("prev")}
                className={`px-3 py-1 rounded-md border ${currentPage === 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-orange-600 text-white'}`}
                disabled={currentPage === 1}
              >
                Prev
              </button>

              {/* Page Number Buttons */}
              {paginationItems.map((item, index) => (
                item === '...' ? (
                  <span key={index} className="px-3 py-1">...</span>
                ) : (
                  <button
                    key={index}
                    onClick={() => handlePageChange(item)}
                    className={`px-3 py-1 rounded-md border ${currentPage === item ? 'bg-orange-600 text-white' : 'bg-gray-200'}`}
                  >
                    {item}
                  </button>
                )
              ))}

              {/* Next button */}
              <button
                onClick={() => handlePrevNext("next")}
                className={`px-3 py-1 rounded-md border ${currentPage === totalPages ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-orange-600 text-white'}`}
                disabled={currentPage === totalPages}
              >
                Next
              </button>

              {/* Jump to page input */}
              <div className="flex items-center space-x-2 ml-4 mt-4 sm:mt-0">
                <input
                  type="number"
                  value={pageInput}
                  onChange={(e) => setPageInput(e.target.value)}
                  className="px-3 py-1 rounded-md border"
                  placeholder="Jump to page"
                  min={1}
                  max={totalPages}
                />
                <button
                  onClick={handleJumpToPage}
                  className="px-3 py-1 bg-blue-600 text-white rounded-md"
                >
                  Go
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
