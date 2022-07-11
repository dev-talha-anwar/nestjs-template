import { Table, Column, Model, CreatedAt, UpdatedAt, DeletedAt, PrimaryKey, Unique, DataType } from 'sequelize-typescript'

@Table
export class User extends Model {
  
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: number

  @Unique
  @Column(DataType.STRING)
  email: string

  @Column(DataType.STRING)
  password: string

  @CreatedAt
  @Column(DataType.DATE)
  created_at: Date

  @UpdatedAt
  @Column(DataType.DATE)
  updated_at: Date

  @DeletedAt
  @Column(DataType.DATE)
  deleted_at: Date
}