export class Item {
  /**
   * @param {string} title
   * @param {number} createdAt
   */
  constructor(title, createdAt = Date.now()) {
    this.title = title;
    this.createdAt = createdAt;
  }
}
