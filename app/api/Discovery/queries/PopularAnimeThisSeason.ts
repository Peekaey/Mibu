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