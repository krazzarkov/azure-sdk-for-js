/*
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the MIT Licence.

  This sample demonstrates retrieving a message from a dead letter queue, editing it and
  sending it back to the main queue.

  Prior to running this sample, run the sample in movingMessagesToDLQ.ts file to move a message
  to the Dead Letter Queue
*/

import { ServiceBusMessage, ServiceBusClient, ReceiveMode, QueueClient } from "@azure/service-bus";

// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

// Define connection string and related Service Bus entity names here
const connectionString = process.env.SERVICE_BUS_CONNECTION_STRING || "<connection string>";
const queueName = process.env.QUEUE_NAME || "<queue name>";

// If deadlettered messages are from Subscription, use `TopicClient.getDeadLetterTopicPath` instead
const deadLetterQueueName = QueueClient.getDeadLetterQueuePath(queueName);
const sbClient: ServiceBusClient = ServiceBusClient.createFromConnectionString(connectionString);

export async function main() {
  try {
    await processDeadletterMessageQueue();
  } finally {
    await sbClient.close();
  }
}

async function processDeadletterMessageQueue() {
  const queueClient = sbClient.createQueueClient(deadLetterQueueName);
  const receiver = queueClient.createReceiver(ReceiveMode.peekLock);

  const messages = await receiver.receiveMessages(1);

  if (messages.length > 0) {
    console.log(">>>>> Received the message from DLQ - ", messages[0].body);

    // Do something with the message retrieved from DLQ
    await fixAndResendMessage(messages[0]);

    // Mark message as complete/processed.
    await messages[0].complete();
  } else {
    console.log(">>>> Error: No messages were received from the DLQ.");
  }

  await queueClient.close();
}

// Send repaired message back to the current queue / topic
async function fixAndResendMessage(oldMessage: ServiceBusMessage) {
  // If sending to a Topic, use `createTopicClient` instead of `createQueueClient`
  const queueClient = sbClient.createQueueClient(queueName);
  const sender = queueClient.createSender();

  // Inspect given message and make any changes if necessary
  const repairedMessage = oldMessage.clone();

  console.log(">>>>> Cloning the message from DLQ and resending it - ", oldMessage.body);

  await sender.send(repairedMessage);
  await queueClient.close();
}

main().catch((err) => {
  console.log("Error occurred: ", err);
});
