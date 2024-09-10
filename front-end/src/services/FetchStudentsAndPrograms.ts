
import { useState, useEffect } from "react";

export const FetchStudentsAndPrograms = () => {
  const [students, setStudents] = useState<{ value: string; label: string }[]>([]);
  const [programs, setPrograms] = useState<{ value: string; label: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [studentsResponse, programsResponse] = await Promise.all([
          fetch("https://freetestapi.com/api/v1/students?limit=5"),
          fetch("https://freetestapi.com/api/v1/students?limit=5"),
          //change to our own api from backend
        ]);

        const studentsData = await studentsResponse.json();
        const programsData = await programsResponse.json();

        setStudents(
          studentsData.map((student: any) => ({
            value: student.id,
            label: student.name,
          }))
        );

        setPrograms(
          programsData.map((student: any) => ({
            value: student.email,
            label: student.email,
          }))
        );

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { students, programs, loading, error };
};
