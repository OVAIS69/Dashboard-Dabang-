import { ApiProperty } from '@nestjs/swagger';

export class ProductData {
  @ApiProperty({ description: 'Product ID' })
  id: number;

  @ApiProperty({ description: 'Product name' })
  name: string;

  @ApiProperty({ description: 'Popularity percentage' })
  popularity: number;

  @ApiProperty({ description: 'Sales percentage' })
  sales: string;
}

export class TopProductsResponseDto {
  @ApiProperty({ description: 'List of top products', type: [ProductData] })
  products: ProductData[];
}
