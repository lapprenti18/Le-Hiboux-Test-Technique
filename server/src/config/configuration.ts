export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
  rabbitmq: {
    user: process.env.RABBITMQ_USER,
    password: process.env.RABBITMQ_PASSWORD,
    host: process.env.RABBITMQ_HOST,
    queueName: process.env.RABBITMQ_QUEUE_NAME,
  },
});