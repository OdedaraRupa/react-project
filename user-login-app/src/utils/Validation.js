
export function Validation({email,password}) {
  const  error = {};

  if(!email.trim()){
    error.email = "Email is Required";
  }
  else if(!/\S+@\S+\.\S+/.test(email)){
    error.email = "Invalid Email Format";
  }
  if(!password.trim()){
    error.password = "Password is Required";

  }
  else if(password.length < 6) {
    error.password = "Password must be at least 6 Character"
  }

  return error;
}