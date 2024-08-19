// mockNotificationService.js
export const getMockNotifications = () => {
  return [
    { id: 1, message: "You have a new follower", type: "follow" },
    { id: 2, message: "New message received", type: "message" },
  ];
};
