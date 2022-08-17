import { Controller, Module, Get } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

@Controller()
class AppController {
  @Get()
  getRootRoute() {
    return 'Hi there!';
  }
}

@Module({
  controllers: [AppController]
})
class AppModule {}

async function boostrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}
boostrap();