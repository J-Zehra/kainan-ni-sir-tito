export interface NavItems {
  navLinks: string[];
  logo: string;
}

export interface KTeaProductModel {
  _id: string;
  product_name: string;
  product_description: string;
  product_image: { asset: { url: string } };
  product_medium_price: number;
  product_large_price: number;
}

type AddOn = {
  name: string;
  quantity: number;
};

export interface KNamProductModel {
  _id: string;
  product_image: { asset: { url: string } };
  product_name: string;
  product_5pcs_price: number;
  product_10pcs_price: number;
  product_description: string;
  addOn?: AddOn[];
}

export interface KEggProductModel {
  _id: string;
  product_image: { asset: { url: string } };
  product_name: string;
  product_price: number;
  product_description: string;
  addOn?: AddOn[];
}

export interface ChefMateProductModel {
  _id: string;
  product_image: { asset: { url: string } };
  product_name: string;
  product_price: number;
  product_description: string;
  addOn?: AddOn[];
}

export interface CartItemModel {
  _id: string;
  product_image: { asset: { url: string } };
  product_name: string;
  totalAmount: number;
  quantity: number;
  addOn?: AddOn[];
  price?: number;
  size?: string;
  pieces?: string;
}
