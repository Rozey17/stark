// const getPosition = (options) => {
//   if (navigator.geolocation) {
//     return new Promise((resolve, reject) => {
//       navigator.geolocation.getCurrentPosition(resolve, reject, options)
//     })
//   }
// }

export default {
  name: 'product',
  title: 'Product',
  type: 'document',

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(80),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      options: {
        maxLength: 500,
      },
    },

    {
      name: 'category',
      title: ' Category',
      type: 'reference',
      weak: true,
      to: [{type: 'category'}],
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'price',
      title: 'price',
      type: 'number',
    },

    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
