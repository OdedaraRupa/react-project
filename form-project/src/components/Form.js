import React, { useState } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import RadioGroup from "./RadioGroup";
import CheckBox from "./CheckBox";
import Validation from "../utils/Validation";
const Form = () => {
  const [error, setError] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    courseType: "",
    skills: [],
    expirymonth: "",
    expiryyear: "",
    cvv: "",
  });

  const handleChange = (name, value) => {
    if (name === "skills") {
      setFormData((prev) => {
        const updatedSkills = prev.skills.includes(value)
          ? prev.skills.filter((item) => item !== value)
          : [...prev.skills, value];

        // Update formData
        const updatedFormData = { ...prev, skills: updatedSkills };

        // Run validation for skills only
        const validationErrors = Validation(updatedFormData);
        setError((prevErrors) => ({
          ...prevErrors,
          skills: validationErrors.skills || "",
        }));

        return updatedFormData;
      });
    } else {
      setFormData((prev) => {
        const updatedFormData = { ...prev, [name]: value };

        // Run validation for just this field
        const validationErrors = Validation(updatedFormData);
        setError((prevErrors) => ({
          ...prevErrors,
          [name]: validationErrors[name] || "",
        }));

        return updatedFormData;
      });
    }
  };
  const handleBlur = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData)
    const validationErrors = Validation(formData);
    setError(validationErrors);
    console.log(error.email);
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      console.log("Form Submit", formData);
      // Optional: Do your API call here
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          name="name"
          value={formData.name}
          placeholder="Full Name"
          onChange={handleChange}
        ></InputField>
        {error.name && <p className="error">{error.name}</p>}
        <InputField
          type="text"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleChange}
        ></InputField>
        {error.email && <p className="error">{error.email}</p>}
        <InputField
          type="password"
          name="password"
          value={formData.password}
          placeholder="Password"
          onChange={handleChange}
        ></InputField>
        {error.password && <p className="error">{error.password}</p>}

        <InputField
          type="number"
          name="expirymonth"
          value={formData.expirymonth}
          placeholder="Expiry Month MM (e.g. 1-12)"
          onChange={handleChange}
        ></InputField>
        {error.expirymonth && <p className="error">{error.expirymonth}</p>}
        <InputField
          type="number"
          name="expiryyear"
          value={formData.expiryyear}
          placeholder="Expiry Year YY(e.g. 25)"
          onChange={handleChange}
        ></InputField>
        {error.expiryyear && <p className="error">{error.expiryyear}</p>}
        <InputField
          type="number"
          name="cvv"
          value={formData.cvv}
          placeholder="Enter CVV"
          onChange={handleChange}
        ></InputField>
        {error.cvv && <p className="error">{error.cvv}</p>}

        <SelectField
          label="Gender"
          name="gender"
          onChange={handleChange}
          onBlur={handleBlur}
          value={formData.gender}
          options={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
            { value: "other", label: "Other" },
          ]}
          required
        ></SelectField>
        {error.gender && <p className="error">{error.gender}</p>}

        <RadioGroup
          label="Course Type"
          name="courseType"
          type="radio"
          selected={formData.courseType}
          onChange={handleChange}
          onBlur={handleBlur}
          options={["fulltime", "parttime"]}
          required
        >
          {" "}
        </RadioGroup>
        {error.courseType && <p className="error">{error.courseType}</p>}
        <CheckBox
          label="Select Your Skills"
          name="skills"
          options={["HTML", "CSS", "JAVASCRIPT", "REACT"]}
          selected={formData.skills}
          onChange={handleChange}
        ></CheckBox>
        {error.skills && <p className="error">{error.skills}</p>}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default Form;
