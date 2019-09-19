import { Mapper } from '../../application/base/mapper';

import { Sprint } from '../../application/domain';
import { SprintEntity } from '../entities';

export class SprintMapper extends Mapper<Sprint, SprintEntity>  {
    
    mapFrom(param: Sprint): SprintEntity {
        return {
            _id: null,
            sprintNo: param.sprintNo,
            status: param.status,
            creation_date: null
        };
    }   

    mapTo(param: SprintEntity): Sprint {
        return  {
            _id: param._id || null,
            sprintNo: param.sprintNo,
            status: param.status,
            creation_date: param.creation_date
        };
    }
}