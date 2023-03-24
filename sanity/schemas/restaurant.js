import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name Of Restaurant',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short Description',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'imageUrl',
      type: 'image',
      title: 'Restaurant Image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'lat',
      type: 'string',
      title: 'Restaurant Latitude',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'long',
      type: 'string',
      title: 'Restaurant Longitude',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      type: 'string',
      title: 'Enter rating from (1-5 Stars',
    },
    {
      name: 'type',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
    },
    {
      name: 'dishes',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    },
  ],
})
