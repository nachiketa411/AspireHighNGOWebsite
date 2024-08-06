import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormContainer,
  Section,
  Label,
  Input,
  Select,
  TextArea,
  CheckBox,
  RadioGroup,
  Button,
} from "./styles"; // Adjust the import path as needed
import {
  formSchema,
  RegistrationFormData,
  RegistrationFormProps,
} from "./FormSchema"; // Adjust the import path as needed

const Form = ({ onSubmit }: RegistrationFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(formSchema),
  });

  return (
    <FormContainer>
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
      >
        <Section>
          <h2>Participant Information</h2>
          <Label>First Name:</Label>
          <Input {...register("firstName")} />
          {errors.firstName && (
            <p className="text-danger">{errors.firstName.message}</p>
          )}

          <Label>Last Name:</Label>
          <Input {...register("lastName")} />
          {errors.lastName && (
            <p className="text-danger">{errors.lastName.message}</p>
          )}

          <Label>Date of Birth:</Label>
          <Input type="date" {...register("dob")} />
          {errors.dob && <p className="text-danger">{errors.dob.message}</p>}

          <Label>Grade Level:</Label>
          <Input {...register("gradeLevel")} />
          {errors.gradeLevel && (
            <p className="text-danger">{errors.gradeLevel.message}</p>
          )}

          <Label>Gender:</Label>
          <RadioGroup>
            <CheckBox type="radio" value="Male" {...register("gender")} /> Male
            <CheckBox
              type="radio"
              value="Female"
              {...register("gender")}
            />{" "}
            Female
            <CheckBox type="radio" value="Other" {...register("gender")} />{" "}
            Other
            <CheckBox
              type="radio"
              value="Prefer not to say"
              {...register("gender")}
            />{" "}
            Prefer not to say
          </RadioGroup>
          {errors.gender && (
            <p className="text-danger">{errors.gender.message}</p>
          )}

          <Label>Race/Ethnicity:</Label>
          <Select {...register("raceEthnicity")}>
            <option value="American Indian or Alaska Native">
              American Indian or Alaska Native
            </option>
            <option value="Asian">Asian</option>
            <option value="Black or African American">
              Black or African American
            </option>
            <option value="Hispanic or Latino">Hispanic or Latino</option>
            <option value="Native Hawaiian or Other Pacific Islander">
              Native Hawaiian or Other Pacific Islander
            </option>
            <option value="White">White</option>
            <option value="Two or more races">Two or more races</option>
            <option value="Other">Other (please specify)</option>
          </Select>
          {errors.raceEthnicity && (
            <p className="text-danger">{errors.raceEthnicity.message}</p>
          )}
          <Input
            placeholder="If other, please specify"
            {...register("raceEthnicityOther")}
          />

          <Label>Primary Language Spoken at Home:</Label>
          <Input {...register("primaryLanguage")} />
          {errors.primaryLanguage && (
            <p className="text-danger">{errors.primaryLanguage.message}</p>
          )}
        </Section>

        <Section>
          <h2>Educational Program Information</h2>
          <Label>School Name:</Label>
          <Input {...register("schoolName")} />
          {errors.schoolName && (
            <p className="text-danger">{errors.schoolName.message}</p>
          )}
          <Label>Teacher’s Name:</Label>
          <Input {...register("teacherName")} />
          {errors.teacherName && (
            <p className="text-danger">{errors.teacherName.message}</p>
          )}
          <Label>Current Education Programs (check all that apply):</Label>
          <CheckBox
            type="checkbox"
            value="Gifted and Talented"
            {...register("educationPrograms")}
          />{" "}
          Gifted and Talented
          <CheckBox
            type="checkbox"
            value="Special Education"
            {...register("educationPrograms")}
          />{" "}
          Special Education
          <CheckBox
            type="checkbox"
            value="ESL/ELL"
            {...register("educationPrograms")}
          />{" "}
          ESL/ELL
          <CheckBox
            type="checkbox"
            value="Title I"
            {...register("educationPrograms")}
          />{" "}
          Title I
          <CheckBox
            type="checkbox"
            value="504 Plan"
            {...register("educationPrograms")}
          />{" "}
          504 Plan
          <CheckBox
            type="checkbox"
            value="Other"
            {...register("educationPrograms")}
          />{" "}
          Other
          <Input
            placeholder="If other, please specify"
            {...register("educationProgramsOther")}
          />
        </Section>

        <Section>
          <h2>Transportation Information</h2>
          <Label>Mode of Transportation to After School Program:</Label>
          <RadioGroup>
            <CheckBox
              type="radio"
              value="School Bus"
              {...register("transportationMode")}
            />{" "}
            School Bus
            <CheckBox
              type="radio"
              value="Public Transportation"
              {...register("transportationMode")}
            />{" "}
            Public Transportation
            <CheckBox
              type="radio"
              value="Parent/Guardian Pickup"
              {...register("transportationMode")}
            />{" "}
            Parent/Guardian Pickup
            <CheckBox
              type="radio"
              value="Walking"
              {...register("transportationMode")}
            />{" "}
            Walking
            <CheckBox
              type="radio"
              value="Other"
              {...register("transportationMode")}
            />{" "}
            Other
          </RadioGroup>
          {errors.transportationMode && (
            <p className="text-danger">{errors.transportationMode.message}</p>
          )}
          <Input
            placeholder="If other, please specify"
            {...register("transportationModeOther")}
          />
        </Section>

        <Section>
          <h2>Parent/Guardian Information</h2>
          <Label>Parent/Guardian 1 Name:</Label>
          <Input {...register("parent1Name")} />
          {errors.parent1Name && (
            <p className="text-danger">{errors.parent1Name.message}</p>
          )}

          <Label>Relationship to Participant:</Label>
          <Input {...register("parent1Relationship")} />
          {errors.parent1Relationship && (
            <p className="text-danger">{errors.parent1Relationship.message}</p>
          )}

          <Label>Phone Number:</Label>
          <Input {...register("parent1Phone")} />
          {errors.parent1Phone && (
            <p className="text-danger">{errors.parent1Phone.message}</p>
          )}

          <Label>Email:</Label>
          <Input {...register("parent1Email")} />
          {errors.parent1Email && (
            <p className="text-danger">{errors.parent1Email.message}</p>
          )}

          <Label>Address:</Label>
          <Input {...register("parent1Address")} />
          {errors.parent1Address && (
            <p className="text-danger">{errors.parent1Address.message}</p>
          )}

          <Label>Parent/Guardian 2 Name:</Label>
          <Input {...register("parent2Name")} />

          <Label>Relationship to Participant:</Label>
          <Input {...register("parent2Relationship")} />

          <Label>Phone Number:</Label>
          <Input {...register("parent2Phone")} />

          <Label>Email:</Label>
          <Input {...register("parent2Email")} />
          {errors.parent2Email && (
            <p className="text-danger">{errors.parent2Email.message}</p>
          )}

          <Label>Address:</Label>
          <Input {...register("parent2Address")} />
        </Section>

        <Section>
          <h2>Emergency Contact Information</h2>
          <Label>Emergency Contact 1 Name:</Label>
          <Input {...register("emergencyContact1Name")} />
          {errors.emergencyContact1Name && (
            <p className="text-danger">
              {errors.emergencyContact1Name.message}
            </p>
          )}

          <Label>Relationship to Participant:</Label>
          <Input {...register("emergencyContact1Relationship")} />
          {errors.emergencyContact1Relationship && (
            <p className="text-danger">
              {errors.emergencyContact1Relationship.message}
            </p>
          )}

          <Label>Phone Number:</Label>
          <Input {...register("emergencyContact1Phone")} />
          {errors.emergencyContact1Phone && (
            <p className="text-danger">
              {errors.emergencyContact1Phone.message}
            </p>
          )}

          <Label>Email:</Label>
          <Input {...register("emergencyContact1Email")} />
          {errors.emergencyContact1Email && (
            <p className="text-danger">
              {errors.emergencyContact1Email.message}
            </p>
          )}

          <Label>Emergency Contact 2 Name:</Label>
          <Input {...register("emergencyContact2Name")} />

          <Label>Relationship to Participant:</Label>
          <Input {...register("emergencyContact2Relationship")} />

          <Label>Phone Number:</Label>
          <Input {...register("emergencyContact2Phone")} />

          <Label>Email:</Label>
          <Input {...register("emergencyContact2Email")} />
          {errors.emergencyContact2Email && (
            <p className="text-danger">
              {errors.emergencyContact2Email.message}
            </p>
          )}
        </Section>

        <Section>
          <h2>Authorized Adults for Pickup</h2>
          <Label>Name 1:</Label>
          <Input {...register("authorizedPickup1Name")} />
          {errors.authorizedPickup1Name && (
            <p className="text-danger">
              {errors.authorizedPickup1Name.message}
            </p>
          )}

          <Label>Relationship to Participant:</Label>
          <Input {...register("authorizedPickup1Relationship")} />
          {errors.authorizedPickup1Relationship && (
            <p className="text-danger">
              {errors.authorizedPickup1Relationship.message}
            </p>
          )}

          <Label>Phone Number:</Label>
          <Input {...register("authorizedPickup1Phone")} />
          {errors.authorizedPickup1Phone && (
            <p className="text-danger">
              {errors.authorizedPickup1Phone.message}
            </p>
          )}

          <Label>Name 2:</Label>
          <Input {...register("authorizedPickup2Name")} />

          <Label>Relationship to Participant:</Label>
          <Input {...register("authorizedPickup2Relationship")} />

          <Label>Phone Number:</Label>
          <Input {...register("authorizedPickup2Phone")} />
        </Section>

        <Section>
          <h2>Medical Information</h2>
          <Label>Primary Physician’s Name:</Label>
          <Input {...register("physicianName")} />
          {errors.physicianName && (
            <p className="text-danger">{errors.physicianName.message}</p>
          )}

          <Label>Phone Number:</Label>
          <Input {...register("physicianPhone")} />
          {errors.physicianPhone && (
            <p className="text-danger">{errors.physicianPhone.message}</p>
          )}

          <Label>Insurance Provider:</Label>
          <Input {...register("insuranceProvider")} />
          {errors.insuranceProvider && (
            <p className="text-danger">{errors.insuranceProvider.message}</p>
          )}

          <Label>Policy Number:</Label>
          <Input {...register("policyNumber")} />
          {errors.policyNumber && (
            <p className="text-danger">{errors.policyNumber.message}</p>
          )}

          <Label>Allergies (food, medication, environmental):</Label>
          <TextArea {...register("allergies")} />

          <Label>Medications:</Label>
          <RadioGroup>
            <CheckBox type="radio" value="Yes" {...register("medications")} />{" "}
            Yes
            <Input
              placeholder="If yes, please specify"
              {...register("medicationsDetails")}
            />
            <CheckBox type="radio" value="No" {...register("medications")} /> No
          </RadioGroup>
          {errors.medications && (
            <p className="text-danger">{errors.medications.message}</p>
          )}

          <Label>Special Needs/Accommodations:</Label>
          <RadioGroup>
            <CheckBox type="radio" value="Yes" {...register("specialNeeds")} />{" "}
            Yes
            <Input
              placeholder="If yes, please specify"
              {...register("specialNeedsDetails")}
            />
            <CheckBox type="radio" value="No" {...register("specialNeeds")} />{" "}
            No
          </RadioGroup>
          {errors.specialNeeds && (
            <p className="text-danger">{errors.specialNeeds.message}</p>
          )}

          <Label>Dietary Restrictions:</Label>
          <RadioGroup>
            <CheckBox
              type="radio"
              value="Yes"
              {...register("dietaryRestrictions")}
            />{" "}
            Yes
            <Input
              placeholder="If yes, please specify"
              {...register("dietaryRestrictionsDetails")}
            />
            <CheckBox
              type="radio"
              value="No"
              {...register("dietaryRestrictions")}
            />{" "}
            No
          </RadioGroup>
          {errors.dietaryRestrictions && (
            <p className="text-danger">{errors.dietaryRestrictions.message}</p>
          )}
        </Section>

        <Section>
          <h2>Releases</h2>
          <Label>Media Release:</Label>
          <RadioGroup>
            <CheckBox
              type="radio"
              value="grant"
              {...register("mediaRelease")}
            />{" "}
            I grant permission for my child to be photographed and/or videotaped
            for use in program materials and publicity.
            <CheckBox
              type="radio"
              value="doNotGrant"
              {...register("mediaRelease")}
            />{" "}
            I do not grant permission for my child to be photographed and/or
            videotaped.
          </RadioGroup>
          {errors.mediaRelease && (
            <p className="text-danger">{errors.mediaRelease.message}</p>
          )}

          <Label>Field Trip Permission:</Label>
          <RadioGroup>
            <CheckBox
              type="radio"
              value="grant"
              {...register("fieldTripPermission")}
            />{" "}
            I grant permission for my child to attend field trips with the after
            school program.
            <CheckBox
              type="radio"
              value="doNotGrant"
              {...register("fieldTripPermission")}
            />{" "}
            I do not grant permission for my child to attend field trips.
          </RadioGroup>
          {errors.fieldTripPermission && (
            <p className="text-danger">{errors.fieldTripPermission.message}</p>
          )}

          <Label>Medical Release:</Label>
          <RadioGroup>
            <CheckBox
              type="radio"
              value="grant"
              {...register("medicalRelease")}
            />{" "}
            I grant permission for the after school program to seek emergency
            medical treatment for my child if necessary.
            <CheckBox
              type="radio"
              value="doNotGrant"
              {...register("medicalRelease")}
            />{" "}
            I do not grant permission for the after school program to seek
            emergency medical treatment for my child.
          </RadioGroup>
          {errors.medicalRelease && (
            <p className="text-danger">{errors.medicalRelease.message}</p>
          )}
        </Section>

        <Section>
          <h2>Parent/Guardian Signature</h2>
          <Label>Signature:</Label>
          <Input {...register("signature")} />
          {errors.signature && (
            <p className="text-danger">{errors.signature.message}</p>
          )}

          <Label>Date:</Label>
          <Input type="date" {...register("signatureDate")} />
          {errors.signatureDate && (
            <p className="text-danger">{errors.signatureDate.message}</p>
          )}
        </Section>

        <Button type="submit">Submit</Button>
      </form>
    </FormContainer>
  );
};

export default Form;
