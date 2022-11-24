import axios from 'axios';
import { time } from 'console';
import { useEffect, useRef, useState } from 'react';
import { SearchList } from '../interface';

const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const timeSet = useRef<NodeJS.Timeout>();
  const [search, setSearch] = useState('');
  const [searchList, setSearchList] = useState<SearchList[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get<SearchList[]>('http://localhost:3001/info');
      const list = data.filter(el => el.name.includes(search));
      setSearchList(list);
    })();
  }, [search]);

  const searchHandler: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    clearTimeout(timeSet.current);
    timeSet.current = setTimeout(() => {
      setSearch(target.value);
    }, 500);
  };

  return (
    <>
      <form onSubmit={e => e.preventDefault()}>
        <input type='text' ref={inputRef} placeholder='검색어 입력' onChange={searchHandler} />
      </form>

      <ul>
        {searchList.map(info => (
          <li key={info.id}>{info.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Search;
