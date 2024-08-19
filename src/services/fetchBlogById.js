import { API_BASE_URI, AUTH_HEADER } from "./constants";

export const fetchBlogById = async (id) => {
  const response = await fetch(`${API_BASE_URI}articles/${id}/`, {
    method: "GET",
    headers: {
      Authorization: AUTH_HEADER,
    },
  });
  return response.json();
};
async function unfollowUser(currentUserId, userToUnfollowId) {
  try {
    // Check if the current user is already following the user to unfollow
    const isFollowing = await checkIfFollowing(currentUserId, userToUnfollowId);
    if (isFollowing) {
      // Remove the user from the current user's following list
      await removeFromFollowingList(currentUserId, userToUnfollowId);

      // Remove the current user from the user to unfollow's follower list
      await removeFromFollowerList(userToUnfollowId, currentUserId);

      console.log(
        `User ${currentUserId} has unfollowed user ${userToUnfollowId}`
      );
    } else {
      console.log(
        `User ${currentUserId} is not following user ${userToUnfollowId}`
      );
    }
  } catch (error) {
    console.error(`Error unfollowing user: ${error}`);
    throw error;
  }
}
