import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { join } from 'path';
import * as hbs from 'hbs';
import * as hbsUtils from 'hbs-utils';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const configService = app.get(ConfigService);
  app.setGlobalPrefix(configService.get('app.apiPrefix'), {
    exclude: ['/'],
  });
  app.useStaticAssets(join(__dirname, '..', 'public')); // public folder used for asset storage
  app.setBaseViewsDir(join(__dirname, '..', 'views')); //  specify for hbs to know where the views are
  hbs.registerPartials(join(__dirname, '..', 'views/layouts')); // storing Handlebars Partials
  hbsUtils(hbs).registerWatchedPartials(join(__dirname, '..', 'views/layouts')); //watch the views/layouts folder for changes
  app.setViewEngine('hbs');

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(configService.get('app.port'));
}
bootstrap();
