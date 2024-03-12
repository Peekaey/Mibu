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