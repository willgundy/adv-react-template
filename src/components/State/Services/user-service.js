import { client } from './client.js';

export function getUser() {
    return client.auth.user();
}

export async function signUpService(email, password) {
    return await client.auth.signUp({ email, password });
}

export async function signInService(email, password) {
    return await client.auth.signIn({ email, password });
}

export async function signOutService() {
    return await client.auth.signOut();
}

export function onAuthChange(handleAuthChange) {
    return client.auth.onAuthStateChange(handleAuthChange);
}

const PROFILE = 'profile';
export async function getLocalProfile() {
    const json = localStorage.getItem(PROFILE);
    if (!json) return null;
    try {
        return JSON.parse(json);
    } catch (err) {
        localStorage.removeItem(PROFILE);
    }
}

export async function saveLocalProfile(profile) {
    localStorage.setItem(PROFILE, JSON.stringify(profile));
}

export async function getProfile() {
    const user = getUser();

    const response =  await client
        .from('profiles')
        .select()
        .eq('id', user.id)
        .single();

    return response;
}

export async function updateProfile(profile) {
    const response = await client
        .from('profiles')
        .upsert(profile)
        .eq('id', profile.id)
        .single();

    saveLocalProfile(response.data);
    return response;
}

export function removeLocalProfile() {
    localStorage.removeItem(PROFILE);
}


