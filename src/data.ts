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
      });
  }

  static getToday(): [DateTime, string | undefined] {
    const date = DateTime.now().toUTC().set({ hour: 0, minute: 0, millisecond: 0, second: 0, day: 15 });
    console.log(date.toISO());
    return [date, this.getDate(date.toISO())];
  }

  static getDate(isoDate: string) {
    return this.data.get(isoDate);
  }
}
