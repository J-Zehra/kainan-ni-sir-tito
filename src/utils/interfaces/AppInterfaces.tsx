export interface NavItems {
  navLinks: string[];
  logo: string;
}

export interface KTeaProductModel {
  image: string;
  productName: string;
  mediumPrice: number;
  largePrice: number;
  description: string;
}

export interface KNamProductModel {
  image: string;
  productName: string;
  fivePieces: number;
  tenPieces: number;
  description: string;
}

export interface KEggProductModel {
  image: string;
  productName: string;
  price: number;
  description: string;
}

export interface CartItemModel {
  image: string;
  productName: string;
  totalAmount: number;
  quantity: number;
  price?: number;
  size?: string;
  pieces?: string;
}
