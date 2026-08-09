const Contact = require("../models/contact.model");
const transporter = require("../utils/mailer");

const submitContact = async (req, res) => {
  try {
    console.log("================================");
    console.log("CONTACT REQUEST RECEIVED");
    console.log("================================");

    console.log("Body:", req.body);

    const {
      name,
      email,
      subject,
      message,
    } = req.body;

    // =========================
    // VALIDATION
    // =========================

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }


    // =========================
    // SAVE TO MONGODB
    // =========================

    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    console.log("MongoDB: Contact saved successfully");
    console.log("Contact ID:", contact._id);


    // =========================
    // SEND EMAIL
    // =========================

    console.log("Sending email...");

    const mailInfo = await transporter.sendMail({

      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,

      to: process.env.EMAIL_USER,

      replyTo: email,

      subject: `Portfolio Contact: ${subject}`,

      text: `
New message from your portfolio website.

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,

      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            max-width: 650px;
            margin: auto;
            padding: 25px;
            background: #f7f7f7;
          "
        >

          <div
            style="
              background: #111827;
              padding: 25px;
              border-radius: 10px;
              color: white;
            "
          >

            <h2 style="margin-top: 0;">
              New Portfolio Message
            </h2>

            <p>
              Someone contacted you through your portfolio website.
            </p>

          </div>


          <div
            style="
              background: white;
              padding: 25px;
              margin-top: 15px;
              border-radius: 10px;
            "
          >

            <p>
              <strong>Name:</strong>
              ${name}
            </p>

            <p>
              <strong>Email:</strong>
              ${email}
            </p>

            <p>
              <strong>Subject:</strong>
              ${subject}
            </p>

            <hr />

            <h3>
              Message
            </h3>

            <p>
              ${message}
            </p>

          </div>

        </div>
      `,
    });


    console.log("Email sent successfully!");
    console.log("Message ID:", mailInfo.messageId);


    // =========================
    // SUCCESS RESPONSE
    // =========================

    return res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: contact,
    });


  } catch (error) {

    // =========================
    // ERROR
    // =========================

    console.log("");
    console.log("================================");
    console.log("CONTACT ERROR");
    console.log("================================");

    console.error(error);

    console.log("================================");
    console.log("ERROR MESSAGE:");
    console.log(error.message);

    console.log("================================");


    return res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};


module.exports = {
  submitContact,
};