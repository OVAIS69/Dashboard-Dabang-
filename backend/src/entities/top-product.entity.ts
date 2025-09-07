import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('top_products')
export class TopProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'integer' })
  popularity: number;

  @Column({ type: 'varchar', length: 10 })
  sales: string;

  @Column({ type: 'integer', default: 0 })
  rank: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
