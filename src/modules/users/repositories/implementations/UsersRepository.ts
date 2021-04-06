import { getRepository, Repository } from "typeorm";
import { Game } from "../../../games/entities/Game";

import {
  IFindUserWithGamesDTO,
  IFindUserByFullNameDTO,
  IFindUserWithGamesByIdResponse,
} from "../../dtos";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";
export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;
  private gameRepository: Repository<Game>;

  constructor() {
    this.repository = getRepository(User);
    this.gameRepository = getRepository(Game);
  }

  async findUserWithGamesById({
    user_id,
  }: IFindUserWithGamesDTO): Promise<IFindUserWithGamesByIdResponse> {
    const user = await this.repository.findOneOrFail({
      relations: ["games"],
      where: {
        id: user_id,
      },
    });

    if (!user) {
      throw new Error("user not found");
    }

    return user;
  }

  async findAllUsersOrderedByFirstName(): Promise<User[]> {
    return await this.repository.query(
      "SELECT * FROM users ORDER BY first_name ASC"
    ); // Complete usando raw query
  }

  async findUserByFullName({
    first_name,
    last_name,
  }: IFindUserByFullNameDTO): Promise<User[] | undefined> {
    return await this.repository.query(
      `SELECT email, first_name, last_name FROM users 
      WHERE LOWER(first_name) = LOWER('${first_name}') 
      and LOWER(last_name) = LOWER('${last_name}') LIMIT 1`
    ); // Complete usando raw query
  }
}
