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

                <!-- Poet Photo -->
                <img
                    src="../assets/poets/${poet.photo}"
                    alt="${poet.name}"
                >

                <!-- Poet Rank -->
                <span class="poet-rank">
                    #${String(poet.rank).padStart(2, "0")}
                </span>

                <!-- Poet Name -->
                <h3>
                    <a href="./poet-detail.html?id=${poet.id}">
                        ${poet.name}
                    </a>
                </h3>

                <!-- Poet Rating -->
                <p>
                    Rating: ${poet.averageRating}
                </p>

                <!-- Poetry Count -->
                <p>
                    Poetry: ${poet.poetryCount}
                </p>

            </article>
        `;

    });

}