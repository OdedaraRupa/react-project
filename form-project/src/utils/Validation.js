export default function Validation(formData){
  const errors = {};
  if(!formData.name.trim()){
    errors.name = "Name is required !";
  }

  if(!formData.email){
    errors.email = "Email is Required !";
  }
  else if(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)){
    errors.email = "Email is Invalid"
  }

  if(!formData.password) {
    errors.password = "Password is Required";
  }else if(formData.password.length < 8){
    errors.password = "Password should be at least 8 characetr long";
  }
  else if(!/[A-z]/.test(formData.password)){
    errors.password = "Password must contain at least one uppercase letter";
  }
  else if(!/[a-z]/.test(formData.password)){
    errors.password = "Password must contain at least one lowercase letter";
  }
  else if(!/[0-9]/.test(formData.password)){
    errors.password = "Password must contain at least one digit";
  }
  else if(!/[!@#$%^&*]/.test(formData.password)){
    errors.password = "Password must contain at least one special character (!@#$%^&*)";
  }

  if(!formData.skills || formData.skills.length === 0){
    errors.skills = "Select at least one skils";

  }
  if(!formData.courseType){
    errors.courseType = "Please select a course type";
  }

  // if(!formData.gender){
  //   errors.gender = "Please Select Gender";

  // }

  
  return errors;
}