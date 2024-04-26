import { EachMessagePayload } from "kafkajs";
import { consumer } from "../kafka/config";
import { sendMailToMailHog } from "../email/emailService";

export const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "topic_eafit" });
  await consumer.run({
    eachMessage: async (message: EachMessagePayload) => {
      const order = JSON.parse(message.message.value.toString());
      sendMailToMailHog({ order: order });
    },
  });
};
