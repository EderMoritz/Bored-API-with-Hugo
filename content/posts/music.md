---
title: "music"
date: 2024-02-09T13:43:09+01:00
draft: true
---

## Post

<div class="post-activity"></div>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        var postTitle = document.querySelector("h1");
        var postActivityContainer = document.querySelector(".post-activity");

        // Holen des Titels des Beitrags
        var postTitleText = postTitle.textContent.trim();

        // Senden des Ajax-Requests
        fetch("https://www.boredapi.com/api/activity?type=" + postTitleText)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log(data);
                // Anzeigen der Aktivität im Container des Beitrags
                postActivityContainer.textContent = data.activity;
            })
            .catch(function(error) {
                console.log("hello");
                console.log("Error fetching activity: ", error);
            });
    });

</script>
