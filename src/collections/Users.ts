import { CollectionConfig } from 'payload/types'

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  fields: [
    {
    name: 'name',
    type: 'text',
    },
    // Email added by default
    // Add more fields as needed
  ],
}

export default Users;
