import { ChangeEvent, SyntheticEvent } from "react";

type Props = {
  onClick: (e: SyntheticEvent) => void;
  search: string | undefined;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Search = ({ onClick, search, handleChange }: Props) => {
  return (
    <div>
      <input type="text" value={search} onChange={(e) => handleChange(e)} />
      <button onClick={(e) => onClick(e)}></button>
    </div>
  );
};

export default Search;
