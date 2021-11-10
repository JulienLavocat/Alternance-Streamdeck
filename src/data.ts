export class Data {
  static load() {
    fetch('https://raw.githubusercontent.com/JulienLavocat/Alternance-Streamdeck/main/assets/data.csv')
      .then((r) => r.text())
      .then(console.log);
  }
}
