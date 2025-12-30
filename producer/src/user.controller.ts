import { Controller } from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";
import { User } from "./interfaces/user.interface";
import { UserService } from "./user.service";

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @GrpcMethod("UserService", "GetFilteredUsers")
  async getFilteredUsers(): Promise<{ users: User[] }> {
    const users = await this.userService.getFilteredUsers();
    return { users };
  }
}
