import {defineField, defineType, validation} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Dish Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'imageUrl',
      type: 'image',
      title: 'Dish Image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'swallows',
      type: 'array',
      title: 'Swallows',
      of: [{type: 'reference', to: [{type: 'swallows'}]}],
    },
    {
      name: 'meats',
      type: 'array',
      title: 'Meats',
      of: [{type: 'reference', to: [{type: 'meats'}]}],
    },
  ],
})
