import { Module } from '@nestjs/common';
import { EcgController } from 'src/controller/ecg.controller';
import { EcgService } from 'src/service/ecg.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Ecg, EcgSchema } from 'src/schema/ecgSchema';

@Module({
  imports: [MongooseModule.forFeature([{name:Ecg.name,schema:EcgSchema}])],
  controllers: [EcgController],
  providers: [EcgService],
})

export class EcgModule{}