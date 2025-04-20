import { Body, Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import type { CreateProjectDto } from "./dto/project.dto";

@ApiTags("projects")
@Controller("projects")
export class ProjectController {

	@Post()
  @ApiOperation({ summary: "Create a new project with group settings for each promotion" })
  @ApiResponse({ status: 201, description: "Project has been successfully created." })
  @ApiResponse({ status: 400, description: "Bad Request" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  async create(@Body() createProjectDto: CreateProjectDto) {
    return {
      message: "Project created successfully",
      data: createProjectDto,
    };
  }
}
