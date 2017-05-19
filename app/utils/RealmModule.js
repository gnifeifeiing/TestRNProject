const Realm = require('realm');

const ContactSchema = {
  name: 'Contact',
  properties: {
    id: 'int',
    name: 'string',
    dept: 'string',
    phone: {
      type: 'string',
      default: '10086'
    }
  }
};
/**
 * 登录用户表
 */
const user = {
  name: 'user',
  properties: {
    id: 'int',
    name: 'string',
    pwd: 'string'
  }
};

export default class RealmModule {

  static getRealmModule() {
    //初始化Realm
    return realm = new Realm({
      schema: [ContactSchema, user]
    });
  }
}