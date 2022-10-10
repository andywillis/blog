import 'dotenv/config';

import { app, port, server } from './service/express';

import routes from './routes/index';

import journal from '../data/journal_old2.json' assert { type: 'json' };

server.listen(port, () => {
  console.log(`http server running on port ${port}`);
  // console.log(`Which means you need to use https://localhost:${port}`);
});

app.get('/journal', routes.journal(journal));
app.get('*', routes.root());
