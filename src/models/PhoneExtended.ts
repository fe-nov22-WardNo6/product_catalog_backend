import {
  AllowNull,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

type Description = {
  title: string;
  text: string[];
};

@Table({
  tableName: 'phones_extended',
})
export class PhoneExtended extends Model {
  @PrimaryKey
  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  id: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  namespaceId: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @AllowNull(true)
  @Column({
    type: DataType.ARRAY(DataType.STRING),
  })
  capacityAvailable: string[];

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  capacity: string;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
  priceRegular: number;

  @AllowNull(true)
  @Column({
    type: DataType.INTEGER,
  })
  priceDiscount: number;

  @AllowNull(true)
  @Column({
    type: DataType.ARRAY(DataType.STRING),
  })
  colorsAvailable: string[];

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  color: string;

  @AllowNull(true)
  @Column({
    type: DataType.ARRAY(DataType.STRING),
  })
  images: string[];

  @AllowNull(false)
  @Column({
    type: DataType.ARRAY(DataType.JSON),
  })
  description: Array<Description>;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  screen: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  resolution: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  processor: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  ram: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  camera: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  zoom: string;

  @AllowNull(false)
  @Column({
    type: DataType.ARRAY(DataType.STRING),
  })
  cell: string[];
}
