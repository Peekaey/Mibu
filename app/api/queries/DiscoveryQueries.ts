// GraphQL query for getting top 10 Popular Anime of all time
export const AllTimePopularAnimeQuery = `
    query {
        Page(perPage: 10) {
        media(sort: POPULARITY_DESC, type: ANIME) {
            id
            title {
            english
            }
            coverImage {
            extraLarge
            }
            popularity
        }
        }
    } `;

// GraphQL Query for getting top 10 All Time Popular Manga
export const AllTimePopularMangaQuery = `
    query {
        Page(perPage: 10) {
        media(sort: POPULARITY_DESC, type: MANGA) {
            id
            title {
            english
            }
            coverImage {
            extraLarge
            }
            popularity
        }
        }
    } `;

// GraphQL Query for getting top 10 currently Trending Anime
export const trendingAnimeQuery = `
  query {
    Page(perPage: 10) {
      media(sort: TRENDING_DESC, type: ANIME, status: RELEASING, format: TV) {
        id
        title {
          english
        }
        coverImage {
          extraLarge
        }
        trending
      }
    }
  }
`;

// GraphQL Query for getting top 10 Currently Trending Manga
export const trendingMangaQuery = `
    query {
        Page(perPage: 10) {
        media(sort: TRENDING_DESC, type: MANGA) {
            id
            title {
            english
            }
            coverImage {
            extraLarge
            }
            trending
        }
        }
    }
    `;

// GraphQL Query for getting top 10 Popular Anime this season
export const PopularAnimeThisSeasonQuery = `
    query {
        Page(perPage: 10) {
        media(sort: POPULARITY_DESC, type: ANIME, season: WINTER, seasonYear: 2024) {
            id
            title {
            english
            }
            coverImage {
            extraLarge
            }
            popularity
        }
        }
    } `;

// GraphQL Query for getting top 10 Popular Manhwa
export const PopularManhwaQuery = `
    query {
        Page(perPage: 10) {
        media(sort: POPULARITY_DESC, type: MANGA, countryOfOrigin:KR) {
            id
            title {
            english
            }
            coverImage {
            extraLarge
            }
            popularity
        }
        }
    } `;

// GraphQL Query for getting top 10 Upcoming Anime next season
export const UpcomingAnimeNextSeasonQuery = `
    query {
        Page(perPage: 10) {
        media(sort: POPULARITY_DESC, type: ANIME, season: SPRING, seasonYear: 2024) {
            id
            title {
                romaji
                english
            }
            coverImage {
                extraLarge
            }
            popularity
        }
        }
    } `;


// Get anime data by its anilist Id
export const GetAnimeById = `
query ($id: Int) { # Define which variables will be used in the query (id)
  Media (id: $id, type: ANIME) {
    id
    title {
      romaji
      english
      native
    }
    type
    status
    episodes
    startDate {
        year
        month
        day
    }
    averageScore
    popularity
    favourites
    isAdult
    description
    synonyms
    coverImage {
        extraLarge
    }
  }
}
`;
// Get anime data by its anilist Id
export const GetAnimeEpisodesById = `
query ($id: Int) { # Define which variables will be used in the query (id)
  Media (id: $id, type: ANIME) {
    id
    title {
      romaji
      english
      native
    }
    streamingEpisodes {
        title
        thumbnail
        url
        site
    }
  }
}
`;