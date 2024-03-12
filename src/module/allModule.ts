import { ConfigModule } from "@nestjs/config";
import { MongoConfig } from "src/module/mongoConfig";
import { EcgModule } from "./ecg.module";

export class AllModule{
    static allImport=[
        ConfigModule.forRoot({
            isGlobal:true,
            envFilePath:'.env',
        }),
        
        MongoConfig.getMongooseModule(),

        EcgModule,

    ]
}