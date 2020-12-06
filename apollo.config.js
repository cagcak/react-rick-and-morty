module.exports = {
  client: {
    service: {
      name: 'react-rick-and-morty',
      localSchemaFile: __dirname + '/src/libs/graphql/schemas/graphql-schema.json',
    },
    includes: [__dirname + '/src/libs/graphql/queries/**'],
  },
};
