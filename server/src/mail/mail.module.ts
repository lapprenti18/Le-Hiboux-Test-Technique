import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import configuration from 'src/config/configuration';
import { join } from 'path';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        // service: 'QueueTest',
        host: configuration().mail.host,
        port: configuration().mail.port,
        secure: false,
        auth: {
          user: configuration().mail.user,
          pass: configuration().mail.password,
        },
      },
      defaults: {
        from: configuration().mail.user,
      },
      template: {
        dir: join(__dirname, 'templates'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
