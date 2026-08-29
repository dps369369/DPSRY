// ========================================
// POETRY DISPLAY
// ========================================

// Display ranked Poetry on the Poetry page
function renderPoetry(poetry) {

    // Find the Poetry container
    const poetryList = document.getElementById(
        "poetry-list"
    );

    // Clear the container
    poetryList.innerHTML = "";


    // Go through every ranked poem
    poetry.forEach(poem => {

        // Find the Poet who wrote this poem
        const poet = DPSRY_DATA.poets.find(
            poet => poet.id === poem.poet
        );

        // Find the Voice assigned to this poem
        const voice = DPSRY_DATA.voices.find(
            voice => voice.id === poem.voice
        );


        // Display the Poetry information
        poetryList.innerHTML += `
            <article class="poetry-card">

                <h3>
    <a href="./poetry-detail.html?id=${poem.id}">
        #${poem.rank} — ${poem.name}
    </a>
</h3>
                <p>
                    Poet: ${poet ? poet.name : "Unknown Poet"}
                </p>

                <p>
                    Voice: ${voice ? voice.name : "Unknown Voice"}
                </p>

                <p>
                    Rating: ${poem.rating}
                </p>

            </article>
        `;

    });

}