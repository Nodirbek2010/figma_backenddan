import React from 'react';
import './home.css';
import './animation-home.css'
import User from '../../assest/icons/user.svg'
import Logo from '../../assest/icons/logo.svg'
function App() {
    return (
        <div className="container">
            <aside className="sidebar">
                <div className="logo">
                    <img src={<Logo/>} alt="" />
                    MAGAZIN</div>
                <nav>
                    <ul>
                        <li>Bosh sahifa</li>
                        <li>Barcha vazifalar</li>
                        <li>Bo'limlar</li>
                        <li>Menejerlar</li>
                        <li>Hisobotlar</li>
                        <li>Mening eslatmalarim</li>
                        <li>Arxivlangan vazifalar</li>
                    </ul>
                </nav>
            </aside>
            <main className="main-content">
                <header className="header">
                    <input type="text" placeholder="Qidiruv..." />
                    <div className="date">12.08.2021</div>
                    <div className="user">
                        <span>Abdulayev Abdulla</span>
                        <img src={<User/>} alt="user avatar" />
                    </div>
                </header>
                <section className="statistics">
                    <h1>Statistika</h1>
                    <div className="stats-overview">
                        <div className="stat">
                            <span className="stat-value">4235</span>
                            <span className="stat-label">Barchasi</span>
                            <span className="stat-change">-7.2% O'tgan oy</span>
                        </div>
                        <div className="stat">
                            <span className="stat-value">234</span>
                            <span className="stat-label">Bajarilgan</span>
                            <span className="stat-change">-12% O'tgan oy</span>
                        </div>
                        <div className="stat">
                            <span className="stat-value">567</span>
                            <span className="stat-label">Jarayonda</span>
                            <span className="stat-change">+9.8% O'tgan oy</span>
                        </div>
                        <div className="stat">
                            <span className="stat-value">324</span>
                            <span className="stat-label">Bajarilmagan</span>
                            <span className="stat-change">+12.5% O'tgan oy</span>
                        </div>
                        <div className="stat">
                            <span className="stat-value">456</span>
                            <span className="stat-label">Bekor qilingan</span>
                            <span className="stat-change">+6% O'tgan oy</span>
                        </div>
                    </div>
                    <div className="general-statistics">
                        <h2>Umumiy statistika</h2>
                        <div className="pie-chart">Pie chart image here</div>
                        <div className="chart-legend">
                            <div className="legend-item"><span className="color-box green"></span>Bajarilgan - 21.2%</div>
                            <div className="legend-item"><span className="color-box orange"></span>Jarayonda - 18.2%</div>
                            <div className="legend-item"><span className="color-box red"></span>Bajarilmagan - 16.2%</div>
                            <div className="legend-item"><span className="color-box blue"></span>Bekor qilingan - 35%</div>
                        </div>
                    </div>
                    <div className="annual-statistics">
                        <h2>Yillik statistika diagrammasi</h2>
                        <div className="bar-chart">Bar chart image here</div>
                    </div>
                </section>
                <section className="tasks">
                    <div className="tasks-header">
                        <button className="active">Bajarilgan</button>
                        <button>Bajarilmagan</button>
                        <button>Jarayonda</button>
                        <button>Bekor qilingan</button>
                    </div>
                    <table className="tasks-table">
                        <thead>
                            <tr>
                                <th>BARCHASI</th>
                                <th>MUAMMO</th>
                                <th>YECHIM</th>
                                <th>BARCHASI</th>
                                <th>O'ZGARISH KUNI</th>
                                <th>HOLATI</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Xizmat va logistika</td>
                                <td>Talab-chizig'ini olish orqali xizmat ko'rsatish</td>
                                <td>Sifat standartlarini belgilash bilan</td>
                                <td>Abdulayev Abdulla</td>
                                <td>2024.01.13</td>
                                <td className="status-pending">Bajarilmagan</td>
                            </tr>
                            <tr>
                                <td>Xizmat va logistika</td>
                                <td>1-texnomashina tayyorlanadi</td>
                                <td>Barcha instrumentlarni moslash</td>
                                <td>Ubaydullayev Sarvar</td>
                                <td>2024.01.12</td>
                                <td className="status-pending">Bajarilmagan</td>
                            </tr>
                            <tr>
                                <td>Xizmat va logistika</td>
                                <td>Talab-chizig'ini olish orqali xizmat ko'rsatish</td>
                                <td>Sifat standartlarini belgilash bilan</td>
                                <td>Abdulayev Abdulla</td>
                                <td>2024.01.13</td>
                                <td className="status-pending">Bajarilmagan</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
}

export default App;
