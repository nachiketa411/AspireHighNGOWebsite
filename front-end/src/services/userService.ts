// userService.ts

export const getUserProfile = async (): Promise<{
  name: string;
  email: string;
}> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate fetching user profile data
      const userProfile = {
        name: "John Doe",
        email: "john.doe@example.com",
      };
      console.log("User profile fetched:", userProfile);
      resolve(userProfile);
    }, 1000); // Simulate an async operation
  });
};
