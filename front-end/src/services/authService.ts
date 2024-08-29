// authService.ts

export const authenticate = async (): Promise<boolean> => {
  // Simulate a login attempt with hardcoded credentials
  const username = "user";
  const password = "password";

  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate authentication success
      if (username === "user" && password === "password") {
        console.log("Authentication successful");
        resolve(true);
      } else {
        console.log("Authentication failed");
        resolve(false);
      }
    }, 1000); // Simulate an async operation
  });
};
