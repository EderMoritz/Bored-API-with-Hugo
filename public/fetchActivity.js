// fetchActivity.js

function fetchAndDisplayActivity() {
    var pageTitle = document.title;
    var postActivityContainer = document.querySelector(".post-activity");

    fetchActivityForTitle(pageTitle)
        .then(function(data) {
            // Anzeigen der Aktivität im Container des Beitrags
            postActivityContainer.textContent = data.activity + ".";
        })
        .catch(function(error) {
            console.log("Error fetching activity: ", error);
        });
}

function fetchActivityForTitle(title) {
    return fetch("https://www.boredapi.com/api/activity?type=" + title)
        .then(function(response) {
            return response.json();
        });
}

document.addEventListener("DOMContentLoaded", fetchAndDisplayActivity);
