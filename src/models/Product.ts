import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({
  tableName: 'products',
})
export class Product extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
  id: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  category: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  phoneId: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
  fullPrice: number;

  @AllowNull(true)
  @Column({
    type: DataType.INTEGER,
  })
  price: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  screen: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  capacity: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  color: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  ram: string;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
  year: number;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
  })
  image: string;
}
