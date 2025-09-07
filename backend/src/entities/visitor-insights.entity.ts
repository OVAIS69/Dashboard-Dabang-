import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('visitor_insights')
export class VisitorInsights {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  type: string; // 'loyal_customers', 'new_customers', 'unique_customers'

  @Column({ type: 'varchar', length: 10 })
  month: string;

  @Column({ type: 'integer' })
  value: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
