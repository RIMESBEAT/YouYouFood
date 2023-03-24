import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'swallows',
  title: 'Swallows',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of Swallow',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      type: 'string',
      title: 'Price',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'imageUrl',
      type: 'image',
      title: 'Swallows image',
      validation: (Rule) => Rule.required(),
    },
  ],
})
