import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({
  name: 'repos',
})
export class Repos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  url: string;

  @Column({ nullable: false })
  techs: string;
}
