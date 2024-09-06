interface School {
  id: number;
  name: string;
}

export interface ProgramService {
  id: number;
  school: School;
  name: string;
  description: string;
  routingPath?: string;
}

const staticProgramList: ProgramService[] = [
  {
    id: 1,
    name: "After School Program",
    school: {
      id: 1,
      name: "SGS",
    },
    description: "SGS After School Program",
  },
  {
    id: 2,
    name: "Attendance",
    school: {
      id: 1,
      name: "SGS",
    },
    description: "SGS Attendance",
  },
  {
    id: 3,
    name: "Exit Report",
    school: {
      id: 1,
      name: "SGS",
    },
    description: "SGS Exit Report",
  },
  {
    id: 4,
    name: "Quaterly Report",
    school: {
      id: 1,
      name: "SGS",
    },
    description: "SGS Quaterly Report",
  },
  {
    id: 5,
    name: "Student Survey",
    school: {
      id: 1,
      name: "SGS",
    },
    description: "SGS Student Survey",
  },
  {
    id: 6,
    name: "Parent Survey",
    school: {
      id: 1,
      name: "SGS",
    },
    description: "SGS Parent Survey",
  },
  {
    id: 7,
    name: "Senior Exit Survey",
    school: {
      id: 1,
      name: "SGS",
    },
    description: "SGS Senior Exit Survey",
  },
];

export const fetchSchoolProgramServices = async (): Promise<
  ProgramService[]
> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(staticProgramList);
    }, 100); // Simulate an async operation
  });
};
