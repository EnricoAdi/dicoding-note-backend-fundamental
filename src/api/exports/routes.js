/* eslint-disable linebreak-style */
// eslint-disable-next-line no-unused-vars
const routes = (handler) => [
  {
    method: 'POST',
    path: '/export/notes',
    handler: handler.postExportNotesHandler,
    options: {
      auth: 'notesapp_jwt',
    },
  },
];

module.exports = routes;
