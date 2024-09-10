import { z } from "zod";

const yesNoEnum = z.enum(["Yes", "No"], {
  required_error: "Please select an option",
});

export const QuarterlyReportFormSchema = z.object({
  AbsentInSchool: z.string().min(1, "absence is required").trim(),
  studentName: z.string().min(1, "please select one").trim(),
  AverageELAGrade: z.string().min(1, "grade is required").trim(),
  AverageMathGrade: z.string().min(1, "grade is required").trim(),
  honorRoll: z.enum(
    ["No Honor Roll", "Principal's Honor Roll", "High Honor Roll", "Honor Roll"],
    { required_error: "please select an option" }
  ),
  numoffailures: z.enum(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], {
    required_error: "Please select an option",
  }),
  Referredforservices: yesNoEnum,
  HasIEP: yesNoEnum,
  InELL: yesNoEnum,
  fivezerofour: yesNoEnum,
  ReceivedIRS: yesNoEnum,
  ReceivedISS: yesNoEnum,
  ReceivedOSS: yesNoEnum,
});

export type QuarterlyReportFormData = z.infer<typeof QuarterlyReportFormSchema>;
