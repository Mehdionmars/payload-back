import type { CollectionConfig } from 'payload/types'

import { LinkFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'

export const Media: CollectionConfig = {
  access: {
    create: () => true,
    delete: () => true,
    read: () => true,
    update: () => true,
  },
  admin: {
    description: 'Creating, updating, and deleting media files.',
  },
  fields: [
    {
      name: 'alt',
      required: true,
      type: 'text',
    },
    {
      name: 'caption',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [LinkFeature({})],
      }),
      type: 'richText',
    },
  ],
  slug: 'media',
  upload: {
    staticDir: path.resolve(__dirname, '../../../media'),
  },
}