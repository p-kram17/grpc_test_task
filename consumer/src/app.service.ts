import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { ClientGrpc } from "@nestjs/microservices";
import { firstValueFrom } from "rxjs";
import { UserService } from "./interfaces/user.interface";

@Injectable()
export class AppService implements OnModuleInit {
  private userService: UserService;

  constructor(@Inject("USER_PACKAGE") private client: ClientGrpc) {}

  onModuleInit() {
    this.userService = this.client.getService<UserService>("UserService");

    setTimeout(() => {
      this.fetchFilteredUsers();
    }, 2000);
  }

  async fetchFilteredUsers() {
    try {
      console.log("Requesting filtered users from Producer...");
      const result = await firstValueFrom(
        this.userService.getFilteredUsers({})
      );
      console.log("\nFiltered Users:", JSON.stringify(result.users, null, 2));
    } catch (error) {
      console.error("Error fetching filtered users:", error.message);
    }
  }
}
