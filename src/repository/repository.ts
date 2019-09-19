import { ISprintRepository, ILikedBoardRepository, ILackedBoardRepository, ILearnedBoardRepository, ILongedBoardRepository, IUserRepository } from "../application/contracts/repository";
import { Sprint, BoardData, UserModel, Credential } from "../application/domain";
import { SprintEntity } from "./entities";
import { SprintMapper } from "./mapper/sprint-mapper";
import { BoardDataEntity } from "./entities/board-data.entity";
import { BoardDataMapper } from "./mapper/board-data.mapper";
import { ReactionMapper } from "./mapper/reaction.mapper";
import { UserEntity } from "./entities/user.entity";
import { UserMapper } from "./mapper/user.mapper";
// import { Sprint } from './mongoose-model/sprint.model';
const { Sprint } = require('./mongoose-model/sprint.model');
// import { LikedBoard } from './mongoose-model/board.model';

const { LikedBoard, LackedBoard, LearnedBoard, LongedBoard } = require('./mongoose-model/board.model');
const { User } = require('./mongoose-model/user.model');
 
export class Repository implements 
ISprintRepository, 
ILikedBoardRepository, 
ILackedBoardRepository,
ILearnedBoardRepository,
ILongedBoardRepository, IUserRepository  {
    
    private static instance: Repository;
    private sprintList: Array<SprintEntity>;
    private sprintMapper: SprintMapper;
    private boardMapper: BoardDataMapper;
    private userMapper: UserMapper;

    constructor() {
        this.sprintList = [];
        this.sprintMapper = new SprintMapper();
        const reactionMapper = new ReactionMapper();
        this.boardMapper = new BoardDataMapper(reactionMapper);
        this.userMapper = new UserMapper();
    }

    static getInstance(): Repository {
        if(!Repository.instance) {
            Repository.instance = new Repository();
        }
        return Repository.instance;
    }

    async getAllSprints(): Promise<Sprint[]> {
        const docs: Array<SprintEntity> = await Sprint.find();
        const result = docs.map(doc => this.sprintMapper.mapTo(doc));
        if(result.length) {
            return new Promise((resolve) => resolve(result));
        }
        return new Promise((resolve, reject) => reject(new Error('Get All Sprint Error')));
    }    

    async createSprint(params: Sprint): Promise<boolean> {
        const entity = this.sprintMapper.mapFrom(params);  
        const result = await new Sprint(entity).save();
        if(result.length) {
            return new Promise((resolve) => resolve(true));
        } 
        return new Promise((resolve, reject) => reject());
    }

    async addNewLongedNote(boardData: BoardData): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    async getLongedBoardNoteList(sprintId: string): Promise<Array<BoardData>> {
        throw new Error("Method not implemented.");
    }

    async updateLongedBoardNote(boardData: BoardData): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    async deleteLongedBoardNote(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    async addNewLearnedNote(boardData: BoardData): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    async getLearnedBoardNoteList(sprintId: string): Promise<BoardData[]> {
        // const docs: Array<BoardDataEntity> = await LearnedBoard.find();
        // const result = docs.map(doc => this.boardMapper.mapTo(doc));
        // if(result) {
        //     return new Promise((resolve) => resolve(result));
        // }
        return new Promise((resolve, reject) => reject(new Error('Get Learned Board Error')));
    }

    async updateLearnedBoardNote(boardData: BoardData): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    async deleteLearnedBoardNote(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    async addNewLackedNote(boardData: BoardData): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    async getLackedBoardNoteList(sprintId: string): Promise<BoardData[]> {
        // const docs: Array<BoardDataEntity> = await LackedBoard.find();
        // const result = docs.map(doc => this.boardMapper.mapTo(doc));
        // if(result) {
        //     return new Promise((resolve) => resolve(result));
        // }
        return new Promise((resolve, reject) => reject(new Error('Get Lacked Board Error')));
    }

    async updateLackedBoardNote(boardData: BoardData): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    async deleteLackedBoardNote(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    async addNewLikedNote(boardData: BoardData): Promise<boolean> {
        const data: BoardDataEntity = this.boardMapper.mapFrom(boardData);
        const result = await new LikedBoard(data).save();
        if(result) {
            return new Promise((resolve) => resolve(true));
        }
        return new Promise((resolve, reject) => reject());
    }

    async getLikedBoardNoteList(sprintId: string): Promise<BoardData[]> {
        // const docs: Array<BoardDataEntity> = await LikedBoard.find();
        // const result = docs.map(doc => this.boardMapper.mapTo(doc));
        // if(result) {
        //     return new Promise((resolve) => resolve(result));
        // }
        return new Promise((resolve, reject) => reject(new Error('Get Liked Board Error')));
    }

    async updateLikedBoardNote(boardData: BoardData): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    async deleteLikedBoardNote(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    async addNewUser(user: UserModel): Promise<boolean> {
       const data: UserEntity = this.userMapper.mapFrom(user);
       const result = await new User(data).save();
       if(result) {
           return new Promise((resolve) => resolve(true));
       }
       return new Promise((resolve, reject) => reject());
    }

    async authenticateUser(details: Credential): Promise<string> {
       const result: UserModel = await User.find(details);
       if(result) {
           return new Promise((resolve) => resolve(result._id as string));
       }
       return new Promise((resolve, reject) => reject());
    }
}