import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId, UpdateWriteOpResult} from 'mongoose';
import { EcgDto } from 'src/dto/ecg.dto';
import { Ecg } from 'src/schema/ecgSchema';

@Injectable()
export class EcgService {
  constructor(
    @InjectModel(Ecg.name) private ecgModel: Model<Ecg>
  ){}

  async create(ecg:EcgDto): Promise<Ecg>{        
    const createdEcg = new this.ecgModel(ecg);    
    return await createdEcg.save();
  }

  async findAll():Promise<Ecg[]>{
    return await this.ecgModel.find().exec()
  }

  async findMany(eq:string):Promise<Ecg[]>{
    return await this.ecgModel.find({eq:eq})
  }

  async findOne(eq:string):Promise<Ecg>{
    return await this.ecgModel.findOne({eq});
  }

  async findOneAndUpdate(ecg:EcgDto):Promise<Ecg>{    
    const updatedEcg = await this.ecgModel.findOneAndUpdate({eq:ecg.eq},{$set:{writetime:ecg.writetime}},{new:true})
    return updatedEcg
  }

  async updateMany(ecg:EcgDto):Promise<UpdateWriteOpResult>{    
    const updatedEcg = await this.ecgModel.updateMany({eq:ecg.eq},{$set:{writetime:ecg.writetime}},{new:true})
    return updatedEcg
  }

  async delete(ecg:EcgDto):Promise<{deletedCount: number}>{    
    const deletedEcg = await this.ecgModel.deleteMany({eq:ecg.eq}).exec();
    return deletedEcg
  }
}
