import React from 'react';

export function Home() {
    return (
        <main>
            <h1>Your SeedFeed</h1>
            <hr />
            <div id="user-based">
                <div id="local" className="grid">
                    <h3>Your Community in Provo</h3>
                    <ul>
                        <li><a href="campaign.html">Neighborhood Veggie Garden</a></li>
                        <img src="img/placeholder-campaign.jpg" alt="Campaign Picture" width="125" />
                        <li><a href="campaign.html">Carrot garden for Provo Elderly Care Center</a></li>
                        <img src="img/placeholder-campaign.jpg" alt="Campaign Picture" width="125" />
                        <li><a href="campaign.html">Sarah's Planting Club</a></li>
                        <img src="img/placeholder-campaign.jpg" alt="Campaign Picture" width="125" />
                    </ul>
                </div>
                <hr className="seedfeed"/>
                <div id="recently-viewed" className="grid">
                    <h3>Recently Viewed</h3>
                    <ul>
                        <li><a href="campaign.html">Saved Campaign 1</a></li>
                        <img src="img/placeholder-campaign.jpg" alt="Campaign Picture" width="125" />
                        <li><a href="campaign.html">Saved Campaign 2</a></li>
                        <img src="img/placeholder-campaign.jpg" alt="Campaign Picture" width="125" />
                        <li><a href="campaign.html">Saved Campaign 3</a></li>
                        <img src="img/placeholder-campaign.jpg" alt="Campaign Picture" width="125" />
                    </ul>
                </div>
                <hr className="seedfeed"/>
                <div id="saved" className="grid">
                    <h3>Saved</h3>
                    <ul>
                        <li><a href="campaign.html">Neighborhood Veggie Garden</a></li>
                        <img src="img/placeholder-campaign.jpg" alt="Campaign Picture" width="125" />
                        <li><a href="campaign.html">Carrot garden for Provo Elderly Care Center</a></li>
                        <img src="img/placeholder-campaign.jpg" alt="Campaign Picture" width="125" />
                        <li><a href="campaign.html">Sarah's Planting Club</a></li>
                        <img src="img/placeholder-campaign.jpg" alt="Campaign Picture" width="125" />
                    </ul>
                </div>
                <hr className="seedfeed"/>
                <div id="seed-match" className="grid">
                    <h3>Seeds you may have</h3>
                    <ul>
                        <li><a href="campaign.html">[Tomato] 1000 Tomato seeds for local Elementary School</a></li>
                        <img src="img/placeholder-campaign.jpg" alt="Campaign Picture" width="125" />
                        <li><a href="campaign.html">[Pepper] 50,000 Pepper seeds to feed Town after natural disaster</a></li>
                        <img src="img/placeholder-campaign.jpg" alt="Campaign Picture" width="125" />
                        <li><a href="campaign.html">[Carrot] Carrot garden for Elderly Care Center</a></li>
                        <img src="img/placeholder-campaign.jpg" alt="Campaign Picture" width="125" />
                        <li><a href="campaign.html">[Rose] 911 Rose seeds for 9/11 community memorial flowerbed</a></li>
                        <img src="img/placeholder-campaign.jpg" alt="Campaign Picture" width="125" />
                    </ul>
                </div>
            </div>
        </main>
    );
}