window.onload = async function () {

    const response = await fetch(
        "API_URL_GOES_HERE"
    );

    const count = await response.text();

    document.getElementById(
        "counter"
    ).innerText = count;
};