import React from "react";

export function EmailTemplate({name},{fullName},{workEmail},{company},{phoneNumber},{projectBudget},{comments},{email},{subject},{message}) {
  return (
    <div>
      <h1>Welcome, {firstName}!</h1>
      <h1>name:{name}</h1>
     <h1>fullName:{fullName}</h1>
     <h1>work email:{workEmail}</h1>
     <h1>company:{company}</h1>
     <h1>phone number:{phoneNumber}</h1>
     <h1>project:{projectBudget}</h1>
     <h1>comments:{comments}</h1>
     <h1>email:{email}</h1>
     <h1>subject:{subject}</h1>
     <h1>message:{message}</h1>
    </div>
  );
}
