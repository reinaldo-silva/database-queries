import { Game } from "../../games/entities/Game";
import {
  IFindUserWithGamesDTO,
  IFindUserByFullNameDTO,
  IFindUserWithGamesByIdResponse,
} from "../dtos";
import { User } from "../entities/User";

export interface IUsersRepository {
  findUserWithGamesById(
    data: IFindUserWithGamesDTO
  ): Promise<IFindUserWithGamesByIdResponse>;
  findAllUsersOrderedByFirstName(): Promise<User[]>;
  findUserByFullName(data: IFindUserByFullNameDTO): Promise<User[] | undefined>;
}
