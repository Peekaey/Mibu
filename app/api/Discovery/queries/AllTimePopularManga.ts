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