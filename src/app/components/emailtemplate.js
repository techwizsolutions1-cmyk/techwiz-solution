import * as React from "react";

export const EmailTemplate = ({
  name,
  email,
  subject,
  message,
  company,
  phoneNumber,
  projectBudget,
  comments,
}) => (
  <div>
    <h1>New Contact Form Submission</h1>
    <p><strong>Name:</strong> {name}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Subject:</strong> {subject}</p>
    <p><strong>Message:</strong> {message}</p>
    {company && <p><strong>Company:</strong> {company}</p>}
    {phoneNumber && <p><strong>Phone:</strong> {phoneNumber}</p>}
    {projectBudget && <p><strong>Budget:</strong> {projectBudget}</p>}
    {comments && <p><strong>Comments:</strong> {comments}</p>}
  </div>
);
