import Header from 'src/components/Header/Header';
import Loader from 'src/components/Loader/Loader';
import MediaCard from 'src/components/MediaCard/MediaCard';
import { useNewsPage } from 'src/pages/NewsPage/useNewsPage';

import './NewsPage.css';

export default function NewsPage() {
  const { news } = useNewsPage();

  if (!news) return <Loader />;

  const sixNews = news.results.slice(0, 6);

  const newsItem = sixNews.map((item: any, index: number) => {
    return (
      <MediaCard
        key={index}
        title={item.title}
        description={
          item.abstract
            ? `${item.abstract.slice(0, 80)}...`
            : 'There is no description for this news'
        }
        image={item.multimedia[0].url}
        link={item.url}
      />
    );
  });

  return (
    <div className="page--news">
      <Header title="News" description="Get a summary of your invoices." />
      <div className="page--news--container">{newsItem}</div>
    </div>
  );
}
