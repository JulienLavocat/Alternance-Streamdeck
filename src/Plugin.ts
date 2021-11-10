import { Data } from './data';
import { Streamdeck } from '@rweich/streamdeck-ts';
import { getIcon } from './utils';

const plugin = new Streamdeck().plugin();

function updateIcon(context: string) {
  const [date, activity] = Data.getToday();

  plugin.setImage(getIcon(activity), context);
}

plugin.on('willAppear', ({ context }) => {
  Data.load().then((r) => updateIcon(context));
});

plugin.on('keyDown', (e) => {
  console.log(e);
});

export default plugin;
