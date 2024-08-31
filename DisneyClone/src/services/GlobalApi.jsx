import React from 'react'

async function GlobalApi() {

    const url = 'https://freetestapi.com/api/v1/movies';
    const options = {
        method: 'GET'
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }

    return (
        <div>GlobalApi</div>
    )
}

export default GlobalApi