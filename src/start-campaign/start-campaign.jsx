import React from 'react';
import './start-campaign.css';

export function StartCampaign() {
    return (
        <main>
            <h2>Start Campaign</h2>
            <p>Start Your Campaign!</p>
            <form>
                <label htmlFor="name">Campaign Name</label>
                <input type="text" id="name" placeholder="Campaign here" />
                <label htmlFor="description">Description</label>
                <input type="text" id="description" placeholder="Description here" />
                <label htmlFor="location">Location</label>
                <input type="text" id="location" placeholder="Location here" />
                <label htmlFor="seeds">Seeds</label>
                <input type="text" id="seeds" placeholder="Seeds type here" />
                <label htmlFor="goal">Goal</label>
                <input type="text" id="goal" placeholder="Goal here" />
                <button className="poppins-semibold" onClick={() => create()}>Create</button>
            </form>
        </main>
    );
}

function create() {
    window.location.href = "login";
}