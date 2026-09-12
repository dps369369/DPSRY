// ========================================
// VOICE DISPLAY
// ========================================

// Display ranked Voices on the Voices page
function renderVoices(voices) {

    // Find the Voice container
    const voicesList = document.getElementById(
        "voices-list"
    );

    // Clear the container before rendering
    voicesList.innerHTML = "";


    // Go through every ranked Voice
    voices.forEach(voice => {

        // Create the Voice card
        voicesList.innerHTML += `
            <article
                class="voice-card"
                onclick="window.location.href='./voice-detail.html?id=${voice.id}'"
            >

                <!-- Voice Rank -->
                <span class="voice-rank">
                    #${String(voice.rank).padStart(2, "0")}
                </span>


                <!-- Voice Name -->
                <h3 class="voice-name">

                    <a href="./voice-detail.html?id=${voice.id}">
                        ${voice.name}
                    </a>

                </h3>


                <!-- Voice Description -->
                <p class="voice-description">
                    ${voice.description}
                </p>


                <!-- Poetry Count -->
                <p class="voice-count">
                    ${voice.poetryCount} Poetry
                </p>

            </article>
        `;

    });

}