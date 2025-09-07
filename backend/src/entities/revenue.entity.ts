import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('revenue')
export class Revenue {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20 })
  type: string; // 'online', 'offline'

  @Column({ type: 'varchar', length: 10 })
  day: string;

  @Column({ type: 'integer' })
  value: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
