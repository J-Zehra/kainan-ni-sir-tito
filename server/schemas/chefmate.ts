export default {
    name: 'chefmate',
    type: 'document',
    title: 'ChefMate Products',
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