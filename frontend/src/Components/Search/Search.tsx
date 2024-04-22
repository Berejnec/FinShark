import { ChangeEvent, SyntheticEvent } from "react";

type Props = {
  onSearchSubmit: (e: SyntheticEvent) => void;
  search: string | undefined;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Search = ({ onSearchSubmit, search, handleSearchChange }: Props) => {
  return (
    <section className="relative bg-gray-100">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <form
          className="form relative flex flex-col w-full p-10 space-y-4 bg-darkBlue rounded-lg md:flex-row md:space-y-0 md:space-x-3"
          onSubmit={onSearchSubmit}
        >
          <input
            className="flex-1 p-3 border-2 rounded-lg placeholder-black focus:outline-none"
            id="search-input"
            placeholder="Search companies"
            value={search}
            onChange={handleSearchChange}
          ></input>
          <button
            onClick={onSearchSubmit}
            type="button"
            className="px-8 py-3 font-normal rounded text-white bg-lightGreen hover:opacity-80"
          >
            Search
          </button>
        </form>
      </div>
      <div></div>
    </section>
  );
};

export default Search;
