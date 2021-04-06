import { Game } from "../../games/entities/Game";
import { User } from "../entities/User";

interface IFindUserWithGamesDTO {
  user_id: string;
}
interface IGamesResponse {
  id: string;
  title: string;
  created_at: Date;
  updated_at: Date;
}

interface IFindUserByFullNameDTO {
  first_name: string;
  last_name: string;
}

interface IFindUserWithGamesByIdResponse {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  created_at: Date;
  updated_at: Date;
  games: IGamesResponse[];
}

export {
  IFindUserWithGamesDTO,
  IFindUserByFullNameDTO,
  IFindUserWithGamesByIdResponse,
};
