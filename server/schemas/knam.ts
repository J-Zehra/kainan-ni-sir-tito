export default {
  name: 'konam',
  type: 'document',
  title: 'Ko-Nam Products',
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
      name: 'product_5pcs_price',
      type: 'number',
      title: '5pcs Price',
    },
    {
      name: 'product_10pcs_price',
      type: 'number',
      title: '10pcs Price',
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
