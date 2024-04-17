import React from 'react';

export function StartCampaign() {
    return (
        <main>
            <h2>Start Campaign</h2>
            <p>Start Your Campaign!</p>
            <form method="get" action="index">
                <label for="name">Campaign Name</label>
                <input type="text" id="name" placeholder="Campaign here" />
                <label for="description">Description</label>
                <input type="text" id="description" placeholder="Description here" />
                <label for="location">Location</label>
                <input type="text" id="location" placeholder="Location here" />
                <label for="seeds">Seeds</label>
                <input type="text" id="seeds" placeholder="Seeds type here" />
                <label for="goal">Goal</label>
                <input type="text" id="goal" placeholder="Goal here" />
                <button className="poppins-semibold" onClick={() => create()}>Create</button>
            </form>
        </main>
    );
}

function create() {
    return("campaign created")
}