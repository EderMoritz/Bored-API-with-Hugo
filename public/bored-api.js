// bored_api.js
document.addEventListener("DOMContentLoaded", function() {
    // Holen des Aktivitätsdaten von Bored API für jeden Beitrag
    var postTitles = document.querySelectorAll(".post-title");

    postTitles.forEach(function(postTitle) {
        var postActivityContainer = postTitle.nextElementSibling;

        // Holen des Titels des Beitrags
        var postTitleText = postTitle.textContent.trim();

        // Senden des Ajax-Requests
        fetch("https://www.boredapi.com/api/activity?type=" + postTitleText)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                // Anzeigen der Aktivität im Container des Beitrags
                postActivityContainer.textContent = data.activity;
            })
            .catch(function(error) {
                console.log("Error fetching activity: ", error);
            });
    });
});
