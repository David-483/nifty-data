import React, { useState, useEffect } from "react";

function BecomePremium() {
    const [user] = useState(JSON.parse(localStorage.getItem('profile')));

    return (
        <b> Become Premium </b>
    );
}

export default BecomePremium;
