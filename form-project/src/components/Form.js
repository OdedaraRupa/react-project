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
   
  });

  const handleChange = (name, value) => {
    if (name === "skills") {
      setFormData((prev) => {
        const updated = prev.skills.includes(value)
          ? prev.skills.filter((item) => item !== value)
          : [...prev.skills, value];
        return { ...prev, skills: updated };
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
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
         {error.email && <p className="error" >{error.email}</p>}
        <InputField
          type="password"
          name="password"
          value={formData.password}
          placeholder="Password"
          onChange={handleChange}
        ></InputField>
         {error.password && <p className="error">{error.password}</p>}
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
