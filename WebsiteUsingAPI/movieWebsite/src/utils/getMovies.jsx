import axios from "axios";

const options = (customUrl) => {
  return {
    method: "GET",
    url: customUrl,
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMWQ0YmQ4OGIwMDFkN2M0YWUyODQ5YWU5MTViOTkzYiIsIm5iZiI6MTcxOTI0MzA2MC4zMzc2NTYsInN1YiI6IjY2NGRkY2FhNzA5MDFlNTcxMWI5OTU1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u6X5sI1iZvcLOwbq3Iac-KWgSxxe0pEsQpmWaFT7B80",
    },
  };
};

export const getMovies = async (url) => {
  try {
    const response = await axios.request(options(url));
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    console.error("에러입니다!");
    return null;
  }
};
