import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return (async () => {
      try {
        return await json(await read());
      } finally {
        console.log('Done!');
      }
    })();
  }
}
