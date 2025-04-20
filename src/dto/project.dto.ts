import { IsInt, IsNotEmpty } from "class-validator";

export class CreateProjectDto {
	@IsInt()
	@IsNotEmpty()
	minMembers!: number;

	@IsInt()
	@IsNotEmpty()
	maxMembers!: number;
}
