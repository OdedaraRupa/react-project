import React, { useState } from "react";
import Card from "./Card";
const Form = (props) => {
  const currentMonth = new Date().getMonth() + 1;
  const formatting = String(currentMonth).length <= 1 ? "0" : null;
  const formattedCurrentMonth = formatting + currentMonth;
  const currentYear = new Date().getFullYear();
  
  

  const [formData, setFormData] = useState({
    number: "",
    name: "",
    date: currentYear + "-" + formattedCurrentMonth,
    cvv: "",
  });

  const [side, setSide] = useState("front");
  const [flip, setFlip] = useState(true);
  const [message, setMessage] = useState(
    "Please enter your credit card details"
  );
  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    if (name === "cvv" || name === "number") {
      value = value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");
    }

    if (name === "number") {
      value = value.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1-$2-$3-$4");
    }

    setFormData({
      ...formData,
      [name]: value.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1-$2-$3-$4"),
    });

    if (name === "cvv") {
      setSide("back");
      setTimeout(() => {
        setFlip(true);
      }, 100);
      return;
    }
    setSide("front");
    setTimeout(() => {
      setFlip(true);
    }, 100);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Thank you for your custom");
    console.log("submitted");
  };
  return (
    <React.Fragment>
      <div className="form-container">
        <Card formData={formData} flip={flip} side={side} />
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>
              Card Number
              <input
                name="number"
                value={formData.number}
                type="text"
                placeholder="0000 0000 0000 0000"
                maxLength={12}
                required
                onChange={handleChange}
              />
            </label>
            <label>
              Name on card
              <input
                name="name"
                value={formData.name}
                type="text"
                placeholder="Name"
                minLength={6}
                maxLength={16}
                required
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="supporting-input-container">
            <label>
              Expiry date
              <input
                name="date"
                value={formData.date}
                type="month"
                required
                onChange={handleChange}
              />
            </label>
            <label>
              CVV
              <input
                name="cvv"
                value={formData.cvv}
                type="text"
                id="cvv"
                placeholder="123"
                minLength={3}
                maxLength={3}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="input-container">
            <input type="submit" value={"Submit"} />
            <p className="message-info">{message}</p>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Form;
