import { ColumnType, Generated } from 'kysely';

export type Product = {
  id: string;
  stock: number;
  rating: number;
  name: string;
  description: string;
  price: number;
  isBestSeller: boolean;
  leadTime: number;
  image: string;
  createdAt: ColumnType<Date | null, Date | string, Date | string>;
  updatedAt: ColumnType<Date, Date | string, Date | string>;
  discountId: string | null;
};

export type Discount = {
  id: string;
  percent: number;
  expiresAt: number;
};

export type Review = {
  id: string;
  rating: number;
  comment: string;
  createdAt: ColumnType<Date | null, Date | string, Date | string>;
  updatedAt: ColumnType<Date, Date | string, Date | string>;
  productId: string;
  userId: string;
};

export type User = {
  id: string;
  name: string | null;
  email: string;
  image: string | null;
};

export type Database = {
  Product: Product;
  Discount: Discount;
  Review: Review;
  User: User;
};
