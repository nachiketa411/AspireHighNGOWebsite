import { FormField } from "../Utilities/FormField";
import {
  createTextField,
  createRadioField,
  createSelectField
} from "../Utilities/formUtilities";
import { QuarterlyReportFormData } from "./QuarterlyReportSchema";

export const QuarterlyReportFormFields=(
    students: { value: string; label: string }[],
  ): FormField<QuarterlyReportFormData >[] => {
 return[
    createSelectField(
          "studentName",
          "Student Name",
          students
        ),
    createTextField("AbsentInSchool", "Absent In School"),
    createTextField("AverageELAGrade", "Average ELA Grade"),
    createTextField("AverageMathGrade", "Average Math Grade"),
    createRadioField("honorRoll", "Honor Roll", [
        { label: "No Honor Roll", value: "No Honor Roll" },
        { label: "Principal's Honor Roll", value: "Principal's Honor Roll" },
        { label: "High Honor Roll", value: "High Honor Roll" },
        { label: "Honor Roll", value: "Honor Roll" },
        ]),
    createSelectField("numoffailures","# of failures (Core Content Areas)",[
        {label:"0", value:"0"},
        {label:"1", value:"1"},
        {label:"2", value:"2"},
        {label:"3", value:"3"},
        {label:"4", value:"4"},
        {label:"5", value:"5"},
        {label:"6", value:"6"},
        {label:"7", value:"7"},
        {label:"8", value:"8"},
        {label:"9", value:"9"},
        {label:"10", value:"10"},
        ]),
    createRadioField("Referredforservices", "Referred for services", [
        { label: "Yes", value: "Yes" },
        { label: "No", value: "No" },
        ]),
    createRadioField("HasIEP", "Has IEP", [
        { label: "Yes", value: "Yes" },
        { label: "No", value: "No" },
        ]),
    createRadioField("InELL", "In ELL", [
        { label: "Yes", value: "Yes" },
        { label: "No", value: "No" },
        ]),

    createRadioField("fivezerofour", "504", [
        { label: "Yes", value: "Yes" },
        { label: "No", value: "No" },
         ]),
    createRadioField("ReceivedIRS", "Received I&RS", [
        { label: "Yes", value: "Yes" },
        { label: "No", value: "No" },
        ]),
    createRadioField("ReceivedISS", "Received ISS", [
        { label: "Yes", value: "Yes" },
        { label: "No", value: "No" },
        ]),
    createRadioField("ReceivedOSS", "Received OSS", [
        { label: "Yes", value: "Yes" },
        { label: "No", value: "No" },
            ]),
  
]};
