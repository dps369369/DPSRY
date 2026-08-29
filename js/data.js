// ========================================
// DPSRY DATA SYSTEM
// ========================================

const DPSRY_DATA = {

    poets: [],

    poetry: [],

    voices: []

};


// ========================================
// LOAD DPSRY DATA
// ========================================

async function loadDPSRYData() {

    try {


        // ========================================
        // DETECT THE CURRENT WEBSITE
        // ========================================

        const isGitHubPages =
            window.location.hostname ===
            "dps369369.github.io";


        // ========================================
        // SET PROJECT PATH
        // ========================================

        const projectPath =
            isGitHubPages
                ? "/DPSRY"
                : "";


        // ========================================
        // LOAD DATA
        // ========================================

        const [

            poetsResponse,

            poetryResponse,

            voicesResponse

        ] = await Promise.all([


            fetch(
                `${projectPath}/data/poets.json`
            ),


            fetch(
                `${projectPath}/data/poetry.json`
            ),


            fetch(
                `${projectPath}/data/voices.json`
            )


        ]);


        // ========================================
        // CHECK FILES
        // ========================================

        if (!poetsResponse.ok) {

            throw new Error(
                "Failed to load poets.json"
            );

        }


        if (!poetryResponse.ok) {

            throw new Error(
                "Failed to load poetry.json"
            );

        }


        if (!voicesResponse.ok) {

            throw new Error(
                "Failed to load voices.json"
            );

        }


        // ========================================
        // CONVERT JSON
        // ========================================

        const poetsData =
            await poetsResponse.json();


        const poetryData =
            await poetryResponse.json();


        const voicesData =
            await voicesResponse.json();


        // ========================================
        // STORE DATA
        // ========================================

        DPSRY_DATA.poets =
            poetsData.poets;


        DPSRY_DATA.poetry =
            poetryData.poetry;


        DPSRY_DATA.voices =
            voicesData.voices;


        console.log(
            "DPSRY data loaded:",
            DPSRY_DATA
        );


        return DPSRY_DATA;


    } catch (error) {

        console.error(
            "DPSRY data loading failed:",
            error
        );

    }

}