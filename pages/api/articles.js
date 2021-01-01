import axios from 'axios';

export const getArticles = (req, res) => {
  const { pageNumber } = req.body;

  return axios
    .get(`https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    })
    .then(apiResponse => res.json({ articles: apiResponse.data.articles }))
    .catch(err => res.json({ articles: [], err }));
};

export default getArticles;
