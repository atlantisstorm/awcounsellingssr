export const initState = {
  first_name: "",
  surname: "",
  email: "",
  message: "",
  status: "",
  statusTextStyle: ""
};
  
export const statusMessages = {
  sent: "Your message has been sent.",
  sending: "Sending...",
  error: "Please ensure all fields are filled in and that your email address is correct!"
};

export const sendEmail = ({ formState, setFormState }) => {
    const firstName = formState.first_name;
    const surname = formState.surname;
    const email = formState.email;
    const message = formState.message;
    const emailRegex = /\S+@\S+\.\S+/;
    //const emailUrl = "/conform";
    const emailUrl = "https://v49bmm0fz3.execute-api.eu-west-1.amazonaws.com/dev/send";

    if (firstName.length > 0 && surname.length > 0 && emailRegex.test(email) > 0 && message.length) {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", emailUrl, true);

      xhr.setRequestHeader("Content-type", "application/json");
      xhr.onreadystatechange = function() {
        console.log(`#01 xhr.status==${xhr.status}`);
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          setFormState({
            ...formState, 
            status: statusMessages.sent,
            statusTextStyle: "success"
           });
        }
      };

      const data = {
        name: `${firstName} ${surname}`,
        email: email,
        message: message
      };

      xhr.send(JSON.stringify(data));
      setFormState({
        ...formState, 
        status: statusMessages.sending,
        statusTextStyle: "warning"
       });
    }
    else {
      setFormState({
        ...formState, 
        status: statusMessages.error,
        statusTextStyle: "danger"
       });      
    }    
}