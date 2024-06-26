import { createTransport } from "nodemailer";

const transporter = createTransport({
  host: "host.docker.internal",
  port: 1025,
});

export const sendMailToMailHog = async ({ order }) => {
  await transporter.sendMail({
    from: "from@example.com",
    to: "admin@admin.com",
    subject: "An order has been completed",
    html: `Order #${order.id} with a total of $${order.admin_revenue} has been completed`,
  });

  await transporter.sendMail({
    from: "from@example.com",
    to: order.ambassador_email,
    subject: "An order has been completed",
    html: `You earned $${order.ambassador_revenue} from the link #${order.code}`,
  });

  await transporter.close();
};
