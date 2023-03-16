export default {
  name: 'kotea',
  type: 'document',
  title: 'Ko-Tea Products',
  fields: [
    {
      name: 'product_name',
      type: 'string',
      title: 'Product Name',
    },
    {
      name: 'product_description',
      type: 'string',
      title: 'Product Description',
    },
    {
      name: 'product_medium_price',
      type: 'number',
      title: 'Medium Price',
    },
    {
      name: 'product_large_price',
      type: 'number',
      title: 'Large Price',
    },
    {
      name: 'product_image',
      type: 'image',
      title: 'Product Image',
      options: {
        hotspot: true,
      },
    },
  ],
}
