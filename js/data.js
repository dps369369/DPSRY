// ========================================
// DPSRY DATA SYSTEM
// ========================================

// Central place where all DPSRY data will live
const DPSRY_DATA = {
  poets: [],
  poetry: [],
  voices: []
};


// ========================================
// LOAD DPSRY DATA
// ========================================

// Load all three JSON files before the website uses the data
async function loadDPSRYData() {

  try {

    // Load Poets, Poetry, and Voices at the same time
    const [
      poetsResponse,
      poetryResponse,
      voicesResponse
    ] = await Promise.all([

      // "/" means start from the DPSRY project root
      fetch("/data/poets.json"),
      fetch("/data/poetry.json"),
      fetch("/data/voices.json")

    ]);


    // Check whether each file loaded successfully
    if (!poetsResponse.ok) {
      throw new Error("Failed to load poets.json");
    }

    if (!poetryResponse.ok) {
      throw new Error("Failed to load poetry.json");
    }

    if (!voicesResponse.ok) {
      throw new Error("Failed to load voices.json");
    }


    // Convert JSON responses into JavaScript objects
    const poetsData = await poetsResponse.json();
    const poetryData = await poetryResponse.json();
    const voicesData = await voicesResponse.json();


    // Store the actual data in DPSRY_DATA
    DPSRY_DATA.poets = poetsData.poets;
    DPSRY_DATA.poetry = poetryData.poetry;
    DPSRY_DATA.voices = voicesData.voices;


    // Confirm that everything loaded correctly
    console.log("DPSRY data loaded:", DPSRY_DATA);


    // Return the complete DPSRY data
    return DPSRY_DATA;

  } catch (error) {

    // Show an error if something goes wrong
    console.error("DPSRY data loading failed:", error);

  }
}