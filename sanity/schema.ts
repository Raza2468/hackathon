import { type SchemaTypeDefinition } from 'sanity'
import Products from './Products'
import Categories from './Categories'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Products, Categories],
}
