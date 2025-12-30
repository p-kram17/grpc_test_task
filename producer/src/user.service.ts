import { Injectable } from "@nestjs/common";
import * as fs from "fs";
import * as path from "path";
import { User } from "./interfaces/user.interface";

@Injectable()
export class UserService {
  async getFilteredUsers(): Promise<User[]> {
    const filePath = path.join(__dirname, "data", "users.json");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const users: User[] = JSON.parse(fileContent);

    // Filter users by age > 18
    const filteredUsers = users.filter((user) => user.age > 18);

    console.log("Filtered users:", filteredUsers);
    return filteredUsers;
  }
}
