export default function Validation(formData){
  const errors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!formData.name.trim()){
    errors.name = "Name is required !";
  }

  if(!formData.email){
    errors.email = "Email is Required !";
  }
  else if(!emailRegex.test(formData.email)){
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

  if(!formData.expirymonth.trim()){
    errors.expirymonth = "Expiry Month is required";
  }else if(isNaN(formData.expirymonth) ||
    Number(formData.expirymonth) < 1 ||
    Number(formData.expirymonth) > 12 ){
    errors.expirymonth = "Enter a valid month (1-12)"
  }

  if(!formData.expiryyear.trim()){
    errors.expiryyear = "Expiry year is required"
  }
  else if(!/^\d{2}$/.test(formData.expiryyear)){
    errors.expiryyear = "Enter a valid 2 digit year"
  }

  if(!formData.cvv.trim()){
    errors.cvv = "CVV is required";
  }
  else if(!/^\d{3,4}$/.test(formData.cvv)){
    errors.cvv = "CVV must be 3 or 4 digits";
  }

  if(!formData.skills || formData.skills.length === 0){
    errors.skills = "Select at least one skils";

  }
  if(!formData.courseType){
    errors.courseType = "Please select a course type";
  }

  if(!formData.gender){
    errors.gender = "Please Select Gender";

  }

  
  return errors;
}