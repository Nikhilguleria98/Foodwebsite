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
    const totalPages = Math.ceil(
      filteredMenuData[selectedFilter]?.length / itemsPerPage
    );
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    } else {
      alert("Invalid page number");
    }
  };

 

  return (
    <div className="py-8 px-2 mt-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-orange-600">
        Explore Our Menu
      </h1>
      <Explore
        setSelectedFilter={setSelectedFilter}
        selectedFilter={selectedFilter}
      />

      {Object.entries(filteredMenuData).map(([category, items]) => {
        const paginatedItems = paginateItems(items); // Get the items for the current page
        const totalPages = Math.ceil(items.length / itemsPerPage);
      

        return (
          <div key={category} >
            <MenuSection category={category} items={paginatedItems} />

          
          
              {/* Previous button */}
             <div className="flex flex-col md:flex-row gap-4 justify-center">
             <div className="flex justify-center items-center gap-3">
              <button
                onClick={() => handlePrevNext("prev")}
                className={`px-3 py-1 rounded-md border ${
                  currentPage === 1
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-orange-600 text-white"
                }`}
                disabled={currentPage === 1}
              >
                Prev
              </button>

              {/* Current page and total pages */}
              <span className="text-gray-700 font-semibold">
                Page {currentPage} of {totalPages}
              </span>


              {/* Next button */}
              <button
                onClick={() => handlePrevNext("next")}
                className={`px-3 py-1 rounded-md border ${
                  currentPage === totalPages
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-orange-600 text-white"
                }`}
                disabled={currentPage === totalPages}
              >
                Next
              </button>

              </div>
              {/* Jump to page input */}
              <div className="flex justify-center items-center space-x-2 ml-4 ">
                <input
                  type="number"
                  value={pageInput}
                  onChange={(e) => setPageInput(e.target.value)}
                  className="px-2 py-1 rounded-md border"
                  placeholder="Jump to page"
                  min={1}
                  max={totalPages}
                />
                <button
                  onClick={handleJumpToPage}
                  className="px-3 py-1 bg-orange-600 text-white rounded-md"
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
