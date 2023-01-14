// const getPosition = (options) => {
//   if (navigator.geolocation) {
//     return new Promise((resolve, reject) => {
//       navigator.geolocation.getCurrentPosition(resolve, reject, options)
//     })
//   }
// }

export default {
  name: 'category',
  title: 'Category',
  type: 'document',

  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(80),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
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
    // {
    //   name: 'product',
    //   title: ' Product',
    //   type: 'reference',
    //   weak: true,
    //   to: [{type: 'product'}],
    // //   validation: (Rule) => Rule.required(),
    // },
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
