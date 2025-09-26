import sgMail from "@sendgrid/mail";
const API_KEY = process.env.API_KEY_SENDGRID as string;
sgMail.setApiKey(API_KEY);

const msg = {
  to: "ghoshsujay422@gmail.com",   // recipient
  from: "sujayg222@gmail.com", // sender (must be verified in SendGrid)
  subject: "Hello from sujay mail test  SendGrid",
  text: "This is a plain text email sent using SendGrid + Node.js",
  html: "<h1>This is an HTML email sent using SendGrid 🎉</h1>",
};

// Step 3: Send email
sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent successfully!");
  })
  .catch((error) => {
    console.error("Error sending email:", error);
});