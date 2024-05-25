import React from 'react';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className="grid-container">
      <header className="header">
        <div className="header-left">
          <span className="material-icons-outlined"><i className="bi bi-search"></i></span>
        </div>
        <div className="header-right">
          <span className="material-icons-outlined"><i className="bi bi-bell"></i></span>
          <span className="material-icons-outlined"><i className="bi bi-envelope"></i></span>
          <span className="material-icons-outlined"><i className="bi bi-person-circle"></i></span>
        </div>
      </header>
      <aside id="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <a href="#">
              <span className="material-icons-outlined"><i className="bi bi-columns-gap"></i> dashboard</span>
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="#">
              <span className="material-icons-outlined"><i className="bi bi-bar-chart-fill"></i> leaderboard</span>
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="#">
              <span className="material-icons-outlined"><i className="bi bi-chat-left-dots-fill"></i> forum</span>
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="#">
              <span className="material-icons-outlined"><i className="bi bi-telephone-fill"></i> support</span>
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="#">
              <span className="material-icons-outlined"><i className="bi bi-envelope"></i> messages</span>
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="#">
              <span className="material-icons-outlined"><i className="bi bi-journal-bookmark-fill"></i> reports</span>
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="#">
              <span className="material-icons-outlined"><i className="bi bi-gear"></i> settings</span>
            </a>
          </li>
        </ul>
      </aside>
      <main className="main-container">
        <div className="main-title">
          <h2>DASHBOARD</h2>
        </div>
        <div className="main-cards">
          <div className="card">
            <div className="card-inner">
              <h2>LIKES</h2>
              <span className="material-icons-outlined"><i className="bi bi-hand-thumbs-up"></i></span>
            </div>
            <h1>4,021</h1>
          </div>
          <div className="card">
            <div className="card-inner">
              <h2>SUBSCRIBERS</h2>
              <span className="material-icons-outlined"><i className="bi bi-bell"></i></span>
            </div>
            <h1>7,645</h1>
          </div>
          <div className="card">
            <div className="card-inner">
              <h2>FOLLOWERS</h2>
              <span className="material-icons-outlined"><i className="bi bi-people"></i></span>
            </div>
            <h1>3,291</h1>
          </div>
          <div className="card">
            <div className="card-inner">
              <h2>MESSAGES</h2>
              <span className="material-icons-outlined"><i className="bi bi-chat-square-heart"></i></span>
            </div>
            <h1>1,962</h1>
          </div>
        </div>
        <div className="products">
          <div className="product-card">
            <h2 className="product-description">Latest Updates</h2>
            <p className="text-secondary"></p>
            <button type="button" className="product-button"><span className="material-icons-outlined"><i className="bi bi-plus"></i></span></button>
          </div>
          <div className="social-media">
            <div className="product">
              <div>
                <div className="product-icon background-blue">
                  <a href="https://www.statista.com/statistics/303681/twitter-users-worldwide/" className='fb'><i className="bi bi-twitter"></i></a>
                </div>
                <h1 className="text-blue">+275</h1>
                <p className="text-secondary"></p>
              </div>
              <div>
                <div className="product-icon background-red">
                  <a href="https://public.datapine.com/#board/DewOGaVzFxsROz5pa3rcuV" className="fb"><i className="bi bi-youtube"></i></a>
                </div>
                <h1 className="text-red">+341</h1>
                <p className="text-secondary"></p>
              </div>
              <div>
                <div className="product-icon background-bb">
                  <a href="https://socialblade.com/youtube/" className='fb'><i className="bi bi-linkedin"></i></a>
                </div>
                <h1 className="text-bb">+106</h1>
                <p className="text-secondary"></p>
              </div>
              <div>
                <div className="product-icon background-green">
                  <a href="https://www.instagram.com/chartdata.ig/" className='fb'><i className="bi bi-instagram"></i></a>
                </div>
                <h1 className="text-green">+154</h1>
                <p className="text-secondary"></p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
