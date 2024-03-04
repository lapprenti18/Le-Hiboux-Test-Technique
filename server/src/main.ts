import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import configuration from './config/configuration';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const user = configuration().rabbitmq.user;
  const password = configuration().rabbitmq.password;
  const host = configuration().rabbitmq.host;
  const queueName = configuration().rabbitmq.queueName;

  await app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://localhost:5672`],
      queue: queueName,
      queueOptions: {
        durable: true,
      },
    },
  });
  
  app.startAllMicroservices();
  app.listen(3000);
}
bootstrap();
