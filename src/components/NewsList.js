import React from 'react';
import './NewsList.css';

const defaultNewsItems = [
  {
    _id: '1',
    headline: 'BEF Conclave 2025 Playbook',
    summary: 'Schedule insights and speaker lineup announced for BEF 2025.',
  },
  {
    _id: '2',
    headline: 'New BEF Sprint on DeepTech Innovation',
    summary: 'Focus on AI, Web3, and Blockchain startups across India.',
  },
  {
    _id: '3',
    headline: 'India-Germany GCC Initiative by BEF',
    summary: 'BEF launches Global Capability Centre in Berlin to support Indian startups.',
  },
  {
    _id: '4',
    headline: 'Investor Roundtable at BEF',
    summary: 'Key VCs and angels discussed emerging tech investment opportunities.',
  },
  {
    _id: '5',
    headline: 'BEF Partners with Industry Bodies',
    summary: 'MoUs signed to promote exports and international collaborations.',
  },
  {
    _id: '6',
    headline: 'Youth Innovation Spotlight at BEF',
    summary: 'Young entrepreneurs pitch climate-tech, medtech, and fintech ideas.',
  }
];

const NewsList = ({ items }) => {
  const newsItems = items && items.length > 0 ? items : defaultNewsItems;

  return (
    <div className="news-list">
      {newsItems.map(news => (
        <div key={news._id} className="news-card">
          <h3>{news.headline}</h3>
          <p>{news.summary}</p>
          <a href={`/news/${news._id}`}>Read more</a>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
