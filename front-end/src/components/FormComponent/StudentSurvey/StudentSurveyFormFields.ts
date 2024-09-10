import { FormField } from "../Utilities/FormField";
import {
  createTextField,
  createSelectField,
  createRadioField,
  createCheckboxField

} from "../Utilities/formUtilities";
import { StudentSurveyFormData } from "./StudentSurveySchema";

export const StudentSurveyFormFields: FormField<StudentSurveyFormData>[] =[
    createTextField("firstName", "First Name"),
    createTextField("middleName", "Middle Name"),
    createTextField("lastName", "Last Name"),
    createRadioField("IsTopicIntrestin","Today's topic was interesting",[
        {label:"Highly agree", value:"Highly agree"},
        {label:"Somewhat agree", value:"Somewhat agree"},
        {label:"Neutral", value:"Neutral"},
        {label:"Somewhat disagree", value:"Somewhat disagree"},
        {label:"Highly disagree", value:"Highly disagree"},
    ]),
    createCheckboxField("MostFun","Which part of today's session was the most fun? \n\n Select all that apply",[
        {label:"Ice Breaker activity", value:"Ice Breaker activity"},
        {label:"Jamboard, Breakout room activity", value:"Jamboard, Breakout room activity"},
        {label:"Independent activity", value:"Independent activity"},
        {label:"Team Building activity", value:"Team Building activity"},
    ]),
    createCheckboxField("SkillsLearned","Skills you learned today",[
        {label:"College Readiness", value:"College Readiness"},
        {label:"Character Education", value:"Character Education"},
        {label:"Career Exploration", value:"Career Exploration"},
        {label:"Team Building", value:"Team Building"},
        {label:"Social Skills", value:"Social Skills"},
        {label:"Leadership Skills", value:"Leadership Skills"},
        {label:"Self-Awareness", value:"Self-Awareness"},
        {label:"Study Skills", value:"Study Skills"},
        {label:"Time Management", value:"Time Management"},
        {label:"Communication Skills", value:"Communication Skills"},
        {label:"Did not learn new skills", value:"Did not learn new skills"},
    ]),
    createSelectField("WhereWillYouUseTheNewSkill","Where or with whom will you use the new skill?",[
        {label:"At School", value:"At School"},
        {label:"At extra-carricular activities", value:"At extra-carricular activities"},
        {label:"with friends/peers", value:"with friends/peers"},
        {label:"with family", value:"with family"},
        {label:"with community", value:"with community"},
        {label:"with myself", value:"with myself"},
    ]),
    createTextField("LifeGoal","What is one goal you can apply to your life from today's session?")
];