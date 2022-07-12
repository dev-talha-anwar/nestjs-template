import { DynamicModule, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Dialect } from 'sequelize/types';
import { User } from 'src/models/users/User.model';
require('dotenv').config()

@Module({})
export class DatabaseModule {
  static async forRoot(): Promise<DynamicModule> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      module: DatabaseModule,
      imports: [
        SequelizeModule.forRoot({
            dialect: <Dialect> process.env.DATABASE_DIALECT,
            host: process.env.DATABASE_HOST,
            port: parseInt(process.env.DATABASE_PORT),
            username: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
            synchronize: false,
            query:{
                raw:true, 
            },
            models: [
                User
            ]
        }),
      ],
    };
  }
}