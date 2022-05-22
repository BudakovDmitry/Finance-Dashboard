import { useNews } from 'src/hooks/useNews';

export const useNewsPage = () => {
  const { news } = useNews();
  // console.log(news);

  return {
    news
  };
};
