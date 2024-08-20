const staticStudentData = [
  { ID: 1, Name: "John Doe", Age: 20, Major: "Computer Science" },
  { ID: 2, Name: "Jane Smith", Age: 22, Major: "Mathematics" },
  { ID: 3, Name: "Alice Johnson", Age: 19, Major: "Physics" },
  // Add more data as needed
];

export const fetchStudents = async (): Promise<
  Array<{ [key: string]: any }>
> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(staticStudentData);
    }, 100); // Simulate an async operation
  });
};
