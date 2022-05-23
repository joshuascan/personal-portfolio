import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (req, res) => {
  try {
    await sendgrid.send({
      to: "joshuascan@gmail.com",
      from: "joshscanlanportfolio@gmail.com",
      subject: `[New Message from ${req.body.name}] : ${req.body.subject}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      </head>
      <body>
        <div class="container" style="margin-left: 20px;margin-right: 20px;">
          <h3>You've got a new message from ${req.body.name}. Their email address is: ✉️${req.body.email} </h3>
          <div style="font-size: 16px;">
            <p>Message:</p>
            <p style="font-style: italic;">${req.body.content}</p>
          </div>
        </div>
      </body>
      </html>`,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ status: "OK" });
};

export default sendEmail;
