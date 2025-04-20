import { Module } from "@nestjs/common";
import { ProjectController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
	imports: [],
	controllers: [ProjectController],
	providers: [AppService],
})
export class AppModule {}
