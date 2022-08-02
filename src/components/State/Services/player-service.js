import { client } from './client.js';

export async function removePlayer(id) {
    const response = await client
        .from('nbaPlayers')
        .delete()
        .eq('personId', id)
        .single();

    return response;
}

export async function addPlayer(player) {
    const response = await client
        .from('nbaPlayers')
        .insert(player)
        .single();

    return response;
}

export async function updateTeam(player) {
    const response = await client
        .from('nbaPlayers')
        .update(player)
        .eq('personId', player.personId)
        .single();

    return response;
}
