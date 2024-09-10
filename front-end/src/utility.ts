export const handleAction = (
  action: Function | null,
  fallbackMessage: string
) => {
  return () => {
    if (action) {
      action(); // Execute the action (routing or any other functionality)
    } else {
      alert(fallbackMessage); // Show fallback message if action is unavailable or incorrect
    }
  };
};
