// lib/SettingsDatabase.js
import { BaseDB } from './BaseDatabase';

class SettingsDatabase {
  constructor() {
    this.db = BaseDB.db;  // Reuse existing Dexie instance
  }

  async saveSetting(key, value) {
    return await this.db.settings.put({ key, value });
  }

  async loadSetting(key) {
    const result = await this.db.settings.get(key);
    return result ? result.value : null;
  }

  async loadAllSettings() {
    return await this.db.settings.toArray();
  }

}

export const SettingsDB = new SettingsDatabase();
