import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const config = new DocumentBuilder()
		.setTitle("API")
		.setVersion("1.0")
		.build();

	const documentFactory = () => SwaggerModule.createDocument(app, config);
	SwaggerModule.setup("ui", app, documentFactory);
	SwaggerModule.setup("swagger", app, documentFactory, {
		jsonDocumentUrl: "docs",
	});

	await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
