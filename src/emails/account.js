const nodemailer = require('nodemailer');

async function sendWelcomeEmail(email, name) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'pagarmaheshofficial@gmail.com',
      pass: 'eytcgfsoelmnthqz',
    }
});

const mailOptions = {
    from: 'pagarmaheshofficial@gmail.com',
    to: email,
    subject: 'Thanks for contacting me!!',
    text: `Welcome to the App, ${name}. Let me know how I can assist you!`
};

try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', info.response);
} catch (error) {
    console.error('Error sending email: ', error);
}
}

async function sendCancellationEmail(email,name) {
    const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'pagarmaheshofficial@gmail.com',
      pass: 'eytcgfsoelmnthqz',
    }
});

const mailOptions = {
    from: 'pagarmaheshofficial@gmail.com',
    to: email,
    subject: 'Sorrry to inform You..',
    text: `Lets stop to mailing you, ${name}.`
};

try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', info.response);
} catch (error) {
    console.error('Error sending email: ', error);
}
}


module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail
}
