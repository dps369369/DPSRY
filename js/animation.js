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