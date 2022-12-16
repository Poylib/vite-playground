export interface SearchList {
  id: number;
  name: string;
}
export interface UserData {
  name: string;
  age: string;
}

export interface Bears {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
}

export interface User {
  user: {
    name: string;
    age: string;
  };
}
