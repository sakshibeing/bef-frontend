// src/pages/NewsPage.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HeroSection from '../components/HeroSection';
import FilterOptions from '../components/FilterOptions';
import TopStoryCarousel from '../components/TopStoryCarousel';
import NewsList from '../components/NewsList';
import Sidebar from '../components/Sidebar';
import FooterCTA from '../components/FooterCTA'; // ✅ Only one import
import './NewsPage.css';
import Navbar from '../components/Navbar';

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    fetchNews(filter);
  }, [filter]);

  const fetchNews = async (tag) => {
    try {
      const res = await axios.get(`/api/news${tag !== 'All' ? `?tag=${tag}` : ''}`);
      setNews(res.data);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  

  return (
    
    <div className="news-page">
      <Navbar/>
      <HeroSection />
      <FilterOptions className="filter-options" selected={filter} onChange={setFilter} />
      <TopStoryCarousel
        className="top-story-carousel"
        stories={[
          {
            headline: 'BEF Conclave 2025 Playbook',
            summary: 'Schedule insights and speaker lineup.',
          },
          {
            headline: 'Industry Sprint Launches',
            summary: 'New themes and partners announced.',
          },
          {
            headline: 'Investor Networking Summary',
            summary: 'Quotes and key deals struck.',
          },
        ]}
      />
     <div className="news-list-sidebar">
        <NewsList items={news} />
         <Sidebar />
      </div>


      {/* ✅ Add FooterCTA component here */}
      <FooterCTA />
    </div>
  );
};

export default NewsPage;
