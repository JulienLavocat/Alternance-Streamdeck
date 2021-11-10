import { DateTime } from 'luxon';

export class Data {
  private static data: Map<string, string> = new Map();

  static load() {
    // Can't use await, typescript hates it for some reasons
    return fetch('https://raw.githubusercontent.com/JulienLavocat/Alternance-Streamdeck/main/assets/data.csv')
      .then((r) => r.text())
      .then((r) => r.split('\n'))
      .then((lines) => {
        for (const line of lines) {
          const value = line.split(',');
          this.data.set(value[0], value[1]);
        }
        console.log(this.data);
      });
  }

  static getToday(): [Date, string | undefined] {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    date.setDate(15);
    console.log(date, date.toISOString());
    return [date, this.getDate(date.toISOString())];
  }

  static getDate(date: string) {
    return this.data.get(date);
  }
}
