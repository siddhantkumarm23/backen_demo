
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const appPrefix = 'v1';

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(appPrefix);

  const config = new DocumentBuilder()
    .setTitle('API')
    .setDescription('Task API Demo')
    .setVersion('1.0')
    .addTag('task')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(`${appPrefix}/api`, app, documentFactory);

  await app.listen(process.env.PORT);
  console.log(`App started on http://localhost:${process.env.PORT}/${appPrefix} 🚀`);

}
bootstrap();
