"use client";

const Search = () => {
  //const handleChange = (e) => {e.preventDefault()};
  return (
    <div>
      <div className="flex flex-1 w-[500] flex-shrink-0">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          className="peer block w-full mx-4 mt-2 px-3 py-2 rounded-md border text-white bg-primary dark:bg-primary pl-10 text-sm outline-2 placeholder:text-white"
          placeholder="Search by Category"
          // onChange={(e) => {
          //   handleChange(e);
          //}}
        />
      </div>
    </div>
  );
};
export default Search;
