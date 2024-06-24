const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMWQ0YmQ4OGIwMDFkN2M0YWUyODQ5YWU5MTViOTkzYiIsInN1YiI6IjY2NGRkY2FhNzA5MDFlNTcxMWI5OTU1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O234MBRHbG7GYuTh_QiilQppy6lbllNB7PkoaecnQvw",
    },
  };
  
  export const getData = async () => {
    try {
      let Rawresponse = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        options
      );
      let responese = await Rawresponse.json();
      console.log(responese);
    } catch (error) {
      console.log(`error : ${error}`);
    }
  };
  