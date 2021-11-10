import { Data } from './data';
import { Streamdeck } from '@rweich/streamdeck-ts';
import { getIcon } from './utils';

const plugin = new Streamdeck().plugin();

plugin.on('willAppear', ({ context }) => {
  Data.load();

  plugin.setImage(getIcon('Entreprise'), context);
  setTimeout(() => plugin.setImage(getIcon('Formation'), context), 2000);
  setTimeout(() => plugin.setImage(getIcon('Ferie'), context), 4000);
});

plugin.on('keyDown', (e) => {
  console.log(e);
});

export default plugin;
