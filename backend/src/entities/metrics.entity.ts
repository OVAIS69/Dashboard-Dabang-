import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('metrics')
export class Metrics {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  type: string; // 'total_sales', 'total_orders', 'products_sold', 'new_customers'

  @Column({ type: 'varchar', length: 20 })
  value: string;

  @Column({ type: 'varchar', length: 50 })
  change: string;

  @Column({ type: 'varchar', length: 10 })
  trend: string; // 'up', 'down', 'stable'

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
