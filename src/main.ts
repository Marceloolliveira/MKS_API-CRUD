import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Documentação Api CRUD MKS-desenvolvimento-de-sistemas')
    .setDescription(
      'A API de Gerenciamento de Filmes é uma plataforma que permite aos usuários realizar operações CRUD (Create, Read, Update, Delete) em uma coleção de filmes. Ela fornece endpoints para criar, visualizar, atualizar e excluir informações sobre filmes, além de possibilitar a busca por filmes específicos.',
    )
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
