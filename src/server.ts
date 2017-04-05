import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { platformServer, renderModuleFactory } from '@angular/platform-server'
import { enableProdMode } from '@angular/core'
import { AppServerModuleNgFactory } from '../dist/ngfactory/src/app/app.server.module.ngfactory'
import * as express from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';
import { CONTACTS as contacts} from './app/contact/mock-contacts';

const PORT = 4000;

enableProdMode();

const app = express();

let template = readFileSync(join(__dirname, '..', 'dist', 'index.html')).toString();

app.engine('html', (_, options, callback) => {
  const opts = { document: template, url: options.req.url };

  renderModuleFactory(AppServerModuleNgFactory, opts)
    .then(html => callback(null, html));
});

app.set('view engine', 'html');
app.set('views', 'src')

app.get('*.*', express.static(join(__dirname, '..', 'dist')));

app.get('/getContacts', (req, res) => {
  var numberOfContacts = req.query.no_of_contacts || 10; // by default 10 contacts
  res.setHeader('Content-Type', 'application/json');
  var contacts_parsed = [];
  // there are six contacts initially
  for(let i =0 ; i< Math.floor(numberOfContacts/6) ; i++) {
    contacts_parsed = contacts_parsed.concat(contacts);
  }

  // add more contacts based on remainder
  for(let i=0; i< (numberOfContacts%6) ; i++ ) {
    contacts_parsed.push(contacts[i]);
  }

  return res.json(contacts_parsed);

});

app.get('/test', (req, res) => {
  return res.json({ test: {first:'this is the test string'} });

});

app.get('*', (req, res) => {
  res.render('index', { req });
});



app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}!`);
});
