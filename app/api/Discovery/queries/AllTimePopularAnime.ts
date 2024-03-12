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