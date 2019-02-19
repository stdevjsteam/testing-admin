import { AngularFireDatabase } from '@angular/fire/database';

export default abstract class BaseApiService<T> {
  protected readonly url: string;

  protected constructor (public db: AngularFireDatabase, url: string) {
    this.url = url;
  }
  create (instance: T) {
    this.db.list(this.url).push(instance);
  }
  getAll() {
    return this.db.object(this.url).valueChanges();
  }

  getByKey(key) {
    return this.db.list(this.url, ref => {
      return ref.orderByChild('userId').equalTo(key);
    });
  }
}
