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