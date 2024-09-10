import { FormField } from "../Utilities/FormField";
import {
    createTextField, 
    createRadioField, 
    createEmailField,
    createSelectField} from "../Utilities/formUtilities";
import { SeniorFormData } from "./SeniorSurveySchema";


export const SeniorSurveyFormFields: FormField<SeniorFormData>[] = [
  createEmailField("PersonalEmail","Personal Email"),
  createTextField("firstName", "First Name"),
  createTextField("middleName", "Middle Name"),
  createTextField("PrimaryPhoneNumber", "Primary Phone Number"),
  createTextField("Facebook", "Facebook"),
  createTextField("Instagram", "Instagram"),
  createTextField("lastName", "Last Name"),
  createTextField("PersonToGetInTouch","Full name of a person who will always know how to get in touch with you"),
  createSelectField("relationship"," Their relationship with you",[
    {label:"Parent", value:"Parent"},
    {label:"Relative", value:"Relative"},
    {label:"Friend", value:"Friend"},
    {label:"Other", value:"Other"},
  ]),
  createTextField("PhoneNumber"," Their phone number"),
  createTextField("AnotherPersonToGetInTouch","Full name of another person who will always know how to get in touch with you"),
  createSelectField("relationship"," Their relationship with you",[
    {label:"Parent", value:"Parent"},
    {label:"Relative", value:"Relative"},
    {label:"Friend", value:"Friend"},
    {label:"Other", value:"Other"},
  ]),
  createTextField("PhoneNumber"," Their phone number"),
  createTextField("NumOfCollegeApplication","How many college applications have you submitted?"),
  createRadioField("FillFASFA","Did you fill out FAFSA?",[
    {label:"Yes", value:"Yes"},
    {label:"No", value:"No"},
  ]),
  createRadioField("FillScholarship","Did you apply for scholarships?",[
    {label:"Yes", value:"Yes"},
    {label:"No", value:"No"},
  ]),
  createSelectField("PlanForFall"," Your plan for the next fall",[
    {label:"Attend a 2-year community college", value:"2-year community collge"},
    {label:"Attend a 2-year community college", value:"4-year community collge"},
    {label:"Attend a trade school", value:"trade school"},
    {label:"Attend a military academy", value:"militaryacademy"},
    {label:"Work Full-Time or Part-Time", value:"militaryacademy"},
    {label:"Other", value:"Other"},
  ]),
  createTextField("DescribePlan","Please briefly describe your plans for the upcoming Fall"),
  createRadioField("CompleteRecordReleaseForm","Have you completed a Records Release Form?",[
    {label:"Yes", value:"Yes"},
    {label:"No", value:"No"},
  ]),
  createRadioField("SubmittedTranscript","Has your final high school transcript been submitted to the college you committed to?",[
    {label:"Yes", value:"Yes"},
    {label:"No", value:"No"},
    {label:"Not Going To College",value:"Not Going to College"}
  ]),
  createSelectField("Reason"," If you are not planning to attend college after high school graduation, what is the number one reason?",[
    {label:"I am planning to go to college", value:"2-year community collge"},
    {label:"Attend a 2-year community college", value:"4-year community collge"},
    {label:"Need break from school", value:"Need break from school"},
    {label:"Need to work", value:"Need to work"},
    {label:"My grade/test scores are not high enough", value:"My grade/test scores are not high enough"},
    {label:"I don't need more education to be sucessful in my chosen career", value:"I don't need more education to be sucessful in my chosen career"},
    {label:"I don't need more education to make money", value:"I don't need more education to make money"},
    {label:"I want to start a family", value:"I want to start a family"},
    {label:"I need to take care of a family member", value:"I need to take care of a family member"},
    {label:"it costs too much", value:"it costs too much"},
    {label:"I am undocumented", value:"I am undocumented"},
    {label:"I don't know how to enroll", value:"I don't know how to enroll"},
    {label:"Most of my friends are not going", value:"Most of my friends are not going"},
    {label:"I lived too far away from where class is offered", value:"I lived too far away from where class is offered"},
    {label:"I am not motivated to go", value:"I am not motivated to go"},
    {label:"Other", value:"Other"},
  ]),

];
