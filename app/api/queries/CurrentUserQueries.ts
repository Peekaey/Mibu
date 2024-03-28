// Get User Activities
// export const GetUserActivities = `
// query GetUserActivities($userId: Int) { 
//     Page(page: 1, perPage: 10) { 
//       activities(
//         userId: $userId  
//         isFollowing: true
//         type: ANIME_LIST 
//         sort: [ID_DESC] 
//       ) {
//         ... on ListActivity { 
//           id
//           status
//           progress
//           user {
//             id
//             name
//           }
//           media {
//             id
//             title {
//               userPreferred
//             }
//             coverImage {
//               medium
//             }
//           }
//         }
//       }
//     }
//   }
// `;
export const GetUserActivities = `
query GetUserActivities { 
  Page(page: 1, perPage: 10) { 
    activities(
      isFollowing: true
      type: ANIME_LIST 
      sort: [ID_DESC] 
    ) {
      ... on ListActivity { 
        id
        status
        progress
        user {
          id
          name
        }
        media {
          id
          title {
            userPreferred
          }
          coverImage {
            medium
          }
        }
      }
    }
  }
}`;
