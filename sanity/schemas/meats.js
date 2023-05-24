import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'meats',
  title: 'Meats',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of Meat',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      type: 'string',
      title: 'Price',
    },

  ],
})
