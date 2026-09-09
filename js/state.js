import { defaultProfiles } from './data.js';

const STORAGE_KEY = 'flixio_state';
const PROFILE_KEY = 'flixio_current_profile';

function getDefaultState() {
    return {
        profiles: defaultProfiles.map(p => ({ ...p })),
        currentProfileId: null
    };
}

function loadState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed && Array.isArray(parsed.profiles)) {
                // Filter out dangerous keys and validate profiles
                parsed.profiles = parsed.profiles.filter(p => {
                    if (p.__proto__ || p.constructor !== Object) return false;
                    if (typeof p.name !== 'string' || typeof p.color !== 'string' || typeof p.avatar !== 'string') return false;
                    return true;
                });
                return parsed;
            }
        }
    } catch (e) {
        console.warn('Failed to load state from localStorage:', e);
    }
    return getDefaultState();
}

function saveState(state) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
        console.warn('Failed to save state to localStorage:', e);
    }
}

const state = loadState();

export const State = {
    get() {
        return state;
    },

    getProfiles() {
        return state.profiles;
    },

    getProfile(id) {
        return state.profiles.find(p => p.id === id) || null;
    },

    getCurrentProfile() {
        if (!state.currentProfileId) return null;
        return this.getProfile(state.currentProfileId);
    },

    setCurrentProfile(id) {
        state.currentProfileId = id;
        saveState(state);
        try {
            if (id === null) {
                localStorage.removeItem(PROFILE_KEY);
            } else {
                localStorage.setItem(PROFILE_KEY, id);
            }
        } catch (e) {
            console.warn('Failed to save current profile key:', e);
        }
    },

    addProfile(profile) {
        const MAX_PROFILES = 8;
        if (state.profiles.length >= MAX_PROFILES) {
            console.warn('Maximum number of profiles reached');
            return null;
        }
        const id = profile.name.toLowerCase().replace(/[^a-z0-9]/g, '') + '_' + Date.now();
        const newProfile = {
            id,
            name: profile.name || 'Novo Perfil',
            color: profile.color || '#E50914',
            avatar: profile.avatar || null,
            avatarType: profile.avatarType || 'generated',
            avatarIcon: profile.avatarIcon || '🎭',
            avatarLabel: profile.avatarLabel || ''
        };
        state.profiles.push(newProfile);
        saveState(state);
        return newProfile;
    },

    updateProfile(id, updates) {
        const idx = state.profiles.findIndex(p => p.id === id);
        if (idx === -1) return null;
        Object.assign(state.profiles[idx], updates);
        saveState(state);
        return state.profiles[idx];
    },

    removeProfile(id) {
        const idx = state.profiles.findIndex(p => p.id === id);
        if (idx === -1) return false;
        state.profiles.splice(idx, 1);
        if (state.currentProfileId === id) {
            state.currentProfileId = null;
        }
        saveState(state);
        return true;
    }
};
