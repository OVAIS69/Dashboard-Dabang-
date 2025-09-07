import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('customer_satisfaction')
export class CustomerSatisfaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20 })
  period: string; // 'last_month', 'this_month'

  @Column({ type: 'varchar', length: 20 })
  week: string;

  @Column({ type: 'integer' })
  value: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
