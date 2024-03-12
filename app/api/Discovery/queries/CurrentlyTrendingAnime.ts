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

