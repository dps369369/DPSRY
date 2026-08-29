// ========================================
// VOICE DISPLAY
// ========================================

// Display ranked Voices on the Voices page
function renderVoices(voices) {

    // Find the Voice container
    const voicesList = document.getElementById(
        "voices-list"
    );

    // Clear the container
    voicesList.innerHTML = "";


    // Go through every ranked Voice
    voices.forEach(voice => {

        voicesList.innerHTML += `
            <article class="voice-card">

                <h3>
                    <a href="./voice-detail.html?id=${voice.id}">
                        #${voice.rank} — ${voice.name}
                    </a>
                </h3>

                <p>
                    ${voice.description}
                </p>

                <p>
                    Poetry: ${voice.poetryCount}
                </p>

            </article>
        `;

    });

}