import knex from './db'

export async function getBySlug(slug: string): Promise<object> {
    const election = await knex
        .select('id', 'name')
        .from('elections')
        .where({
            slug,
        })
        .first()

    const constituencies = await knex
        .select('name', 'slug')
        .from('constituencies')
        .where({
            election            : election.id,
        })

    return {
        ...election,
        constituencies,
    }
}
