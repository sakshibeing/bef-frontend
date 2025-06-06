import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HeroSection from '../components/HeroSection';
import FilterOptions from '../components/FilterOptions';
import TopStoryCarousel from '../components/TopStoryCarousel';
import NewsList from '../components/NewsList';
import Sidebar from '../components/Sidebar';
import FooterCTA from '../components/FooterCTA';
import './NewsPage.css';
import FooterCTA from '../components/FooterCTA';

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    fetchFeatured();
    fetchNews(filter);
  }, [filter]);

  const fetchNews = async (tag) => {
    try {
      const res = await axios.get(`/api/news${tag !== 'All' ? `?tag=${tag}` : ''}`);
      setNews(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchFeatured = async () => {
    try {
      const res = await axios.get('/api/news/featured');
      setFeatured(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <HeroSection />
      <FilterOptions selected={filter} onChange={setFilter} />
      <TopStoryCarousel items={featured} />
      <div style={{ display: 'flex' }}>
        <NewsList items={news} />
        <Sidebar />
      </div>
      <div style={{ marginTop: '3rem' }}>
        <FooterCTA />
        </div>

      <FooterCTA />
    </>
  );
};

export default NewsPage;
