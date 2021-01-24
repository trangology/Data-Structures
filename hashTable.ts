export class HashTable<T> {
  _size: number;
  tableSize: number;
  hashTable: Array<{ key: any; value: T | undefined }>;

  constructor() {
    this.tableSize = 5;
    this._size = 0;
    this.hashTable = new Array(this.tableSize).fill({ key: '', value: undefined });
  }

  get size() {
    return this._size;
  }

  private hash(key: any): number {
    key.toString();
    let sum = 0;

    for (let i = 0; i < key.length; i++) {
      sum += key[i].charCodeAt(0) * (i + 1);
    }

    return Math.round(sum % this.tableSize);
  }

  get(key: any): T | undefined {
    let index = this.hash(key);
    let counter = 0;

    while (this.hashTable[index]?.key !== key && counter < this.hashTable.length) {
      index = (index + 1) % this.tableSize;
      counter++;
    }

    return this.hashTable[index]!.value;
  }

  put(key: any, element: T): void {
    let index = this.hash(key);

    // resolves collision using Linear Probing technique
    while (this.hashTable[index].key !== '') {
      index = (index + 1) % this.tableSize;
    }
    this.hashTable[index] = { key: key, value: element };

    this._size++;
  }

  clear(): void {
    this.hashTable = [];
    this._size = 0;
  }
}
