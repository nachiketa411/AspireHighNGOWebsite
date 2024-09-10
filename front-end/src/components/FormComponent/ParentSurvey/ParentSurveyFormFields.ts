import { FormField } from "../Utilities/FormField";
import {
    createTextField, 
    createRadioField, 
    createCheckboxField } from "../Utilities/formUtilities";
import { ParentSurveyFormData } from "./ParentSurveySchema";

const agreeOptions = [
  { label: "Highly agree", value: "Highly agree" },
  { label: "Somewhat agree", value: "Somewhat agree" },
  { label: "Neutral", value: "Neutral" },
  { label: "Somewhat disagree", value: "Somewhat disagree" },
  { label: "Highly disagree", value: "Highly disagree" },
];

export const ParentSurveyFormFields: FormField<ParentSurveyFormData>[] = [
  createTextField("firstName", "First Name"),
  createTextField("middleName", "Middle Name"),
  createTextField("lastName", "Last Name"),
  createRadioField("SatisfiedWithWorkshop", "I am satisfied with today's workshop", agreeOptions),
  createCheckboxField("FavoritePart", "What was your favorite part of the workshop? \n\n Select all that apply", [
    { label: "Ice Breaker", value: "Ice Breaker" },
    { label: "Presentations", value: "Presentations" },
    { label: "Discussions", value: "Discussions" },
    { label: "Q&A", value: "Q&A" },
    { label: "Other", value: "Other" },
  ]),
  createRadioField("TheWorkshopFunAndEngaging", "The workshop was fun and engaging", agreeOptions),
  createRadioField("TheWorkshopInformative", "The workshop was informative", agreeOptions),
  createRadioField("FacilitatorDidGoodJob", "I think the facilitator did a good job", agreeOptions),
  createRadioField("EnjoyedTheActivities", "I enjoyed the activities", agreeOptions),
  createRadioField("PresentationsWereInformative", "I think the presentations were informative", agreeOptions),
  createTextField("feedback", "Feedback"),
];
