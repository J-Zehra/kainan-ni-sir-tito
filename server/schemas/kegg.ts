export default {
  name: 'kegg',
  type: 'document',
  title: 'K-Egg Products',
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
      name: 'product_price',
      type: 'number',
      title: 'Price',
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
