import { Exclude } from "class-transformer";

export class UserEntity{
    id: number;
    email: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    @Exclude()
    password: string;
  
    constructor(partial: Partial<UserEntity>) {
      Object.assign(this, partial);
    }
}