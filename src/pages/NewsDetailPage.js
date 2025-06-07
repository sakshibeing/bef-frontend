import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './NewsDetailPage.css';


const NewsDetailPage = () => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/news/${id}`);

        setNewsItem(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!newsItem) return <p>News item not found.</p>;

  return (
    
    <div className="news-detail-container">
      <h1>{newsItem.headline}</h1>

      <p>
        {newsItem.tags && newsItem.tags.map((tag, idx) => (
          <span key={idx} className="tag">{tag}</span>
        ))}
      </p>

      <p><em>{new Date(newsItem.date).toLocaleDateString()}</em></p>

      <p>{newsItem.summary}</p>

      {newsItem.media && (
        <div className="media-container">
          {/* Conditionally render image or video */}
          {newsItem.media.endsWith('.mp4') ? (
            <video controls src={newsItem.media} width="600" />
          ) : (
            <img src={newsItem.media} alt={newsItem.headline} width="600" />
          )}
        </div>
      )}

      {newsItem.pdfLink && (
        <p>
          <a href={newsItem.pdfLink} target="_blank" rel="noopener noreferrer" download>
            Download full press release (PDF)
          </a>
        </p>
      )}

      {/* Related News */}
      {newsItem.related && newsItem.related.length > 0 && (
        <div className="related-news">
          <h3>Related News / Resources</h3>
          <ul>
            {newsItem.related.map(item => (
              <li key={item._id}>
                <Link to={`/news/${item._id}`}>{item.headline}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NewsDetailPage;
