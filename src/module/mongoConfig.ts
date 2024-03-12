import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';


export class MongoConfig{
    constructor(){}

   static getMongooseModule = () => {
      return MongooseModule.forRootAsync({
            imports:[ConfigModule],
            useFactory: async (config:ConfigService) => ({
                uri:config.get<string>('MONGODB_URL'), 
                dbName:config.get<string>('DBNAME'),                
            }),
            inject:[ConfigService]
        })
    }
}