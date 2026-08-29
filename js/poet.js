// ========================================
// POET DISPLAY
// ========================================

// Display ranked Poets on the Poets page
function renderPoets(poets) {

    // Find the Poet container
    const poetsList = document.getElementById(
        "poets-list"
    );

    // Clear the container
    poetsList.innerHTML = "";


    // Go through every ranked Poet
    poets.forEach(poet => {

        poetsList.innerHTML += `
            <article class="poet-card">

                <img
                    src="../assets/poets/${poet.photo}"
                    alt="${poet.name}"
                >

                <h3>
                    <a href="./poet-detail.html?id=${poet.id}">
                        #${poet.rank} — ${poet.name}
                    </a>
                </h3>

                <p>
                    Rating: ${poet.averageRating}
                </p>

                <p>
                    Poetry: ${poet.poetryCount}
                </p>

            </article>
        `;

    });

}