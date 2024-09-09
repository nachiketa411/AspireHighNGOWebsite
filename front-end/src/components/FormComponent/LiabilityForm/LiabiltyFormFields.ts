import { FormField } from "../Utilities/FormField";
import {
  createTextField,
  createDateField,
} from "../Utilities/formUtilities";
import { LiabilityFormData } from "./LiabilityFormSchema";

export const LiabiltyFormFields: FormField<LiabilityFormData>[] = [
    createTextField("emergencyConsent", "In the event of an emergency, I give Aspire High Youth Development Program consent to transfer me to a healthcare provider. I understand any cost of service not reimbursable by my health insurance coverage shall be solely my responsibility. In the event of an emergency, transportation by any necessary means to obtain medical care or assistance for me, as circumstances may require in the discretion of the Aspire High Youth Development Program staff, its employees, or agents, is hereby authorized. I further give consent to any rescue squad or emergency personnel to render transportation and/or medical care deemed necessary in their discretion and in the best interest of the life, health, and well-being of me as the mentor. \n\nInitial Below"),
    createTextField("waiver","In consideration of being permitted to participate in the Aspire High Youth Development Program, I, for myself, my heirs, personal representatives or assigns, do hereby release, waive, discharge, and covenant not to sue any university, facility, and Aspire High Youth Development Program staff, its officers, employees, and agents from liability for any and all claims resulting in personal injury, accidents or illnesses (including death), and property loss arising from, but not limited to, myself as a mentor in any Aspire High Youth Development Program event. \n\nInitial Below"),
    createTextField("indemnify","I agree to INDEMNIFY AND HOLD any university, community facilities that we visit and Aspire High Youth Development Program HARMLESS from any and all claims, actions, suits, procedures, costs, expenses, damages, and liabilities, including attorney's fees brought as a result of my participation in the activity. \n\nInitial Below"),
    createTextField("photography","I understand I may be photographed while at activities, camps, and programs. I give Aspire High Youth Development Program permission to use the pictures/videos of my child for the Aspire High Youth Development Program promotional and marketing materials such as newsletters, a local newspaper, website, social media, and/or brochure \n\nInitial Below"),
    createTextField("acknowledgement","I have read this waiver of liability, and indemnity agreement, fully understand its items and understand that I am giving up substantial rights, including my right to sue. I acknowledge that I am signing the agreement freely and voluntarily, and intend by my signature to be bound by each term of this agreement to the full extent allowed by law.\n\nInitial Below"),
    createTextField("adultName","Primary Adult Full Name"),
    createTextField("studentName","Student Full Name"),
    createTextField("signature","E-Signature \n\n Type your full name in place of a signature"),
    createDateField("date","Today's Date")
];