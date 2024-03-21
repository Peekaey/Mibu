
// GraphQL Query for getting top 10 Upcoming Anime next season
export const GetGeneralUserData = `
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
