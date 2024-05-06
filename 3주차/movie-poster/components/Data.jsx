import { movies } from "../src/api";

function Data() {
  const dummyDatas = movies.results;
  const datas = [];

  dummyDatas.map((dummyData) => {
    const newData = {
      id: dummyData.id,
      title: dummyData.title,
      isHover: false,
      posterPath: dummyData.poster_path,
      vote: dummyData.vote_average,
    };

    datas.push(newData);
  });
}

export default Data;