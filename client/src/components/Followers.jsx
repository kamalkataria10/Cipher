import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const ProfileCardContainer = ({ children }) => (
  <div className="flex flex-wrap justify-center items-center">{children}</div>
);

const ProfileCard = ({ name, imageUrl }) => (
  <div className="w-full md:w-1/2 lg:w-1/4 p-4">
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="h-48">
        <div className="h-full w-full flex justify-center items-center">
          <img
            className="h-32 w-32 object-cover rounded-full"
            src={imageUrl}
            alt={`${name} profile`}
          />
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <p className="text-gray-700 text-base mb-2">College Student</p>
        <p className="text-gray-700 text-base mb-2">12 Followers</p>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-full">
          Follow
        </button>
      </div>
    </div>
  </div>
);

const Paginate = ({ handlePageClick }) => {
  // const handlePageClick = ({ selected: selectedPage }) => {
  //   setCurrentPage(selectedPage);
  //   console.log(selectedPage);
  // };
  const pageCount = Math.ceil(45 / 8);
  return (
    <div className="flex flex-col items-center">
      <ReactPaginate
        previousLabel={"Back"}
        nextLabel={"Next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"flex justify-center items-center mt-4"}
        subContainerClassName={"pages"}
        activeClassName={"bg-blue-500 text-white"}
        activeLinkClassName={"text-white"}
        pageClassName={
          "bg-white border border-gray-300 h-10 w-10 flex justify-center items-center mr-2 hover:bg-gray-200"
        }
        pageLinkClassName={"text-black"}
        previousClassName={
          "bg-white border border-gray-300 h-10 w-10 flex justify-center items-center mr-2 hover:bg-gray-200"
        }
        nextClassName={
          "bg-white border border-gray-300 h-10 w-10 flex justify-center items-center hover:bg-gray-200"
        }
        nextLinkClassName={"text-black"}
        // onPageActive={(page) =>
        //   console.log(`Page ${page.selected + 1} clicked.`)
        // }
      />
    </div>
  );
};

const Followers = () => {
  const [ProfileCardsData, setProfileCardsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`/all/${currentPage}`);
      console.log(currentPage);
      // console.log(data.followers);
      setProfileCardsData(data.followers);
    }
    fetchData();
  }, [currentPage]);
  return (
    <>
      <ProfileCardContainer>
        {ProfileCardsData.map((profile) => (
          <ProfileCard key={profile._id} {...profile} />
        ))}
      </ProfileCardContainer>
      <div className="mb-4">
        <Paginate handlePageClick={handlePageClick} />
      </div>
    </>
  );
};
export default Followers;
