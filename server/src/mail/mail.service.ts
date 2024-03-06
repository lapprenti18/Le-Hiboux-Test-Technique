import { MailerService } from '@nestjs-modules/mailer';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendCardCreation() {
    try {
      const mailContent = {
        to: "pokspid@gmail.com",
        subject: 'New card created',
        template: './createCard',
        context: {},
      }

      const emailSend = await this.mailerService.sendMail({
        ...mailContent,
      });
    } catch (error) {
      throw new HttpException('Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
