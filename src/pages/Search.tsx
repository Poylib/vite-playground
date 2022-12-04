import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { SearchList } from '../interface';

const Search = () => {
  const timeSet = useRef<NodeJS.Timeout>();
  const [search, setSearch] = useState('');
  const [searchEmpty, setSearchEmpty] = useState(true);
  const [searchList, setSearchList] = useState<SearchList[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get<SearchList[]>('http://localhost:3001/info');
      const result = data.filter(el => el.name.includes(search));
      if (result.length) {
        setSearchList(result);
        setSearchEmpty(false);
      } else {
        setSearchList([]);
        setSearchEmpty(true);
      }
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
        <input type='text' placeholder='검색어 입력' onChange={searchHandler} />
      </form>
      {searchEmpty ? (
        <>
          <p>검색결과가 없습니다</p>
        </>
      ) : (
        <ul>
          {searchList.map(info => (
            <li key={info.id}>{info.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Search;
