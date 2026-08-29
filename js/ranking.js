
// POETRY RANKING
// ========================================

// Rank Poetry by rating — highest rating comes first
function getRankedPoetry(poetry) {

    // First, sort Poetry from highest rating to lowest
    const sortedPoetry = [...poetry].sort(
        (a, b) => b.rating - a.rating
    );

    // Then give every Poetry its rank
    return sortedPoetry.map((poem, index) => {

        return {
            ...poem,

            // Rank starts from 1
            rank: index + 1
        };

    });
}


// ========================================
// POET STATISTICS
// ========================================

// Calculate each Poet's average rating and Poetry count
function getPoetStatistics(poets, poetry) {

  return poets.map(poet => {

    // Find all Poetry belonging to this Poet
    const poetPoetry = poetry.filter(
      poem => poem.poet === poet.id
    );

    // Add all ratings together
    const totalRating = poetPoetry.reduce(
      (sum, poem) => sum + poem.rating,
      0
    );

    // Calculate the average rating
    const averageRating =
      poetPoetry.length > 0
        ? totalRating / poetPoetry.length
        : 0;

    return {
      ...poet,

      // Number of Poetry written by this Poet
      poetryCount: poetPoetry.length,

      // Average rating rounded to 2 decimal places
      averageRating: Number(averageRating.toFixed(2))
    };
  });
}


// ========================================
// POET RANKING
// ========================================

// Rank Poets using:
// 1. Higher average rating
// 2. More Poetry if the average is equal
// 3. Same rank if both are equal
function getRankedPoets(poetStatistics) {

  const sortedPoets = [...poetStatistics].sort((a, b) => {

    // Rule 1: Higher average rating wins
    if (b.averageRating !== a.averageRating) {
      return b.averageRating - a.averageRating;
    }

    // Rule 2: More Poetry wins if averages are equal
    return b.poetryCount - a.poetryCount;
  });

  let currentRank = 1;

  return sortedPoets.map((poet, index, array) => {

    // Same average + same Poetry count = same rank
    if (
      index > 0 &&
      poet.averageRating === array[index - 1].averageRating &&
      poet.poetryCount === array[index - 1].poetryCount
    ) {
      poet.rank = array[index - 1].rank;
    } else {
      poet.rank = currentRank;
    }

    currentRank++;

    return poet;
  });
}


// ========================================
// VOICE + POETRY
// ========================================

// Connect every Voice with the Poetry belonging to it
function getVoicesWithPoetry(voices, poetry) {

  return voices.map(voice => {

    // Find all Poetry that use this Voice
    const voicePoetry = poetry.filter(
      poem => poem.voice === voice.id
    );

    return {
      ...voice,

      // Store the actual Poetry belonging to this Voice
      poetry: voicePoetry,

      // Store the total number of Poetry
      poetryCount: voicePoetry.length
    };
  });
}


// ========================================
// VOICE STATISTICS
// ========================================

// Calculate the number of Poetry belonging to each Voice
function getVoiceStatistics(voices, poetry) {

  return voices.map(voice => {

    // Find all Poetry belonging to this Voice
    const voicePoetry = poetry.filter(
      poem => poem.voice === voice.id
    );

    return {
      ...voice,

      // Number of Poetry in this Voice
      poetryCount: voicePoetry.length
    };
  });
}


// ========================================
// VOICE RANKING
// ========================================

// Rank Voices by the number of Poetry they contain
function getRankedVoices(voiceStatistics) {

  const sortedVoices = [...voiceStatistics].sort(
    (a, b) => b.poetryCount - a.poetryCount
  );

  let currentRank = 1;

  return sortedVoices.map((voice, index, array) => {

    // Voices with the same Poetry count share the same rank
    if (
      index > 0 &&
      voice.poetryCount === array[index - 1].poetryCount
    ) {
      voice.rank = array[index - 1].rank;
    } else {
      voice.rank = currentRank;
    }

    currentRank++;

    return voice;
  });
}