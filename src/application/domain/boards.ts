import { BoardData } from "./board-data";

export interface Boards {
    sprintId: string;
    likedBoard: Array<BoardData>;
    lackedBoard: Array<BoardData>;
    learnedBoard: Array<BoardData>;
    longedBoard: Array<BoardData>;
}