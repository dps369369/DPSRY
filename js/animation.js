// ========================================
// POET RANK — BIG ENTRANCE ANIMATION
// ========================================

// Animate all Poet rank numbers
function animatePoetRanks() {

    gsap.fromTo(
        ".poet-rank",

        // ----------------------------------------
        // STARTING STATE
        // ----------------------------------------
        {
            // Start lower
            y: 60,

            // Start invisible
            opacity: 0,

            // Start smaller
            scale: 0.3,

            // Start slightly rotated
            rotation: -25,

            // Start with a strong glow
            filter: "blur(8px)",

            // Start with a very large shadow
            boxShadow: `
                0 0 10px rgba(79, 111, 82, 0.5),
                0 0 30px rgba(79, 111, 82, 0.4),
                0 0 60px rgba(79, 111, 82, 0.3)
            `
        },

        // ----------------------------------------
        // FINAL STATE
        // ----------------------------------------
        {
            // Return to normal position
            y: 0,

            // Become visible
            opacity: 1,

            // Return to normal size
            scale: 1,

            // Return to normal rotation
            rotation: 0,

            // Remove blur
            filter: "blur(0px)",

            // Normal glow
            boxShadow: `
                0 0 5px rgba(79, 111, 82, 0.2),
                0 0 15px rgba(79, 111, 82, 0.15)
            `,

            // Animation duration
            duration: 1.4,

            // Strong entrance easing
            ease: "back.out(1.7)",

            // Animate each rank separately
            stagger: 0.25
        }
    );

}

// ========================================
// POET CARD ANIMATION
// ========================================

// Animate all Poet cards when the page loads
function animatePoetCards() {

    gsap.fromTo(
        ".poet-card",

        // Starting state
        {
            opacity: 0
        },

        // Final state
        {
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.15
        }
    );

}

// ========================================
// POET RANK — SOLAR ANIMATION
// ========================================

// Animate the solar glow of every Poet rank
function animatePoetRankSolar() {

    gsap.to(".poet-rank", {

        // Stronger visible glow
        boxShadow: `
            0 0 0 1px rgba(79, 111, 82, 0.12),
            0 0 12px rgba(79, 111, 82, 0.20),
            0 0 28px rgba(79, 111, 82, 0.18)
        `,

        // Slow breathing
        duration: 2,

        // Natural breathing movement
        ease: "sine.inOut",

        // Keep breathing forever
        repeat: -1,

        // Return to original state
        yoyo: true

    });

}


// ========================================
// HOME — DPS POET CARD ANIMATION
// ========================================

function animateDPSPoetCard() {

    // Find the Home Poet card
    const card = document.getElementById(
        "dps-poet-card"
    );

    // Stop if the card does not exist
    if (!card) {
        return;
    }


    // ========================================
    // CARD ENTRANCE
    // ========================================

    gsap.fromTo(
        card,

        {
            opacity: 0,
            y: 40
        },

        {
            opacity: 1,
            y: 0,

            duration: 1,

            ease: "power3.out"
        }
    );


    // ========================================
    // POET PHOTO ENTRANCE
    // ========================================

    gsap.fromTo(
        "#dps-poet-card img",

        {
            opacity: 0,
            scale: 1.08
        },

        {
            opacity: 1,
            scale: 1,

            duration: 1.2,

            delay: 0.15,

            ease: "power3.out"
        }
    );


    // ========================================
    // RANK ENTRANCE
    // ========================================

    gsap.fromTo(
        "#dps-poet-card .poet-rank",

        {
            opacity: 0,
            y: 15
        },

        {
            opacity: 1,
            y: 0,

            duration: 0.7,

            delay: 0.35,

            ease: "power2.out"
        }
    );


    // ========================================
    // NAME ENTRANCE
    // ========================================

    gsap.fromTo(
        "#dps-poet-card h3",

        {
            opacity: 0,
            y: 15
        },

        {
            opacity: 1,
            y: 0,

            duration: 0.7,

            delay: 0.45,

            ease: "power2.out"
        }
    );


    // ========================================
    // INFORMATION ENTRANCE
    // ========================================

    gsap.fromTo(
        "#dps-poet-card p",

        {
            opacity: 0,
            y: 10
        },

        {
            opacity: 1,
            y: 0,

            duration: 0.6,

            delay: 0.55,

            stagger: 0.1,

            ease: "power2.out"
        }
    );


    // ========================================
    // HOVER — CARD
    // ========================================

    card.addEventListener(
        "mouseenter",
        () => {

            gsap.to(
                card,
                {
                    y: -8,

                    duration: 0.35,

                    ease: "power2.out"
                }
            );

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            gsap.to(
                card,
                {
                    y: 0,

                    duration: 0.4,

                    ease: "power2.out"
                }
            );

        }
    );


    // ========================================
    // HOVER — PHOTO
    // ========================================

    const image =
        card.querySelector("img");


    card.addEventListener(
        "mouseenter",
        () => {

            gsap.to(
                image,
                {
                    scale: 1.03,

                    duration: 0.6,

                    ease: "power2.out"
                }
            );

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            gsap.to(
                image,
                {
                    scale: 1,

                    duration: 0.6,

                    ease: "power2.out"
                }
            );

        }
    );

}