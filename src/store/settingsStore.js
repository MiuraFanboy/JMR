import { create } from 'zustand';
import { SettingsDB } from '../lib/db/SettingsDatabase';
import { DEFAULT_SETTINGS } from '../utils/settings';

export const useSettingsStore = create((set, get) => ({
    settings: DEFAULT_SETTINGS,   // List of books


    loadSettings: async () => {
    const settingsArray = await SettingsDB.loadAllSettings();

    // Convert array [{key, value}] into an object {key: value}
    if (settingsArray.length ==  0) {
        await Promise.all(
            Object.entries(DEFAULT_SETTINGS).map(([key, value]) =>
                SettingsDB.saveSetting(key, value)
            )
        );
        set({ settings: DEFAULT_SETTINGS });
        
    }else{
        const settingsObject = settingsArray.reduce((acc, setting) => {
            acc[setting.key] = setting.value;
            
            return acc;
        }, {});
        
        set({ settings: settingsObject });
    }
  },

  changeSetting: async (key, value) => {
    await SettingsDB.saveSetting(key, value);
    set(state => ({
        settings: { ...state.settings, [key]: value }
    }));
  },

}));
