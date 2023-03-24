import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Main Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of Food',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'imageUrl',
      type: 'image',
      title: 'image',
      validation: (Rule) => Rule.required(),
    },
  ],
})
