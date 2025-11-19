import React from 'react';
import Banner from '../../Components/Header/Banner';
import TrendingApps from '../TrendingApps/TrendingApps';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TrendingApps></TrendingApps>
        </div>
    );
};

export default Home;