import knex from './db'

export async function getBySlug(slug: string): Promise<object> {
    const election = await knex
        .select('id', 'name', 'slug')
        .from('elections')
        .where({
            slug,
        })
        .first()

    const constituencies = await knex
        .select('id', 'name', 'slug')
        .from('constituencies')
        .where({
            election: election.id,
        })
        .orderBy('name')
        .reduce((acc, constituency) => {
            acc[constituency.slug] = {
                id: constituency.id,
                name: constituency.name,
            }

            return acc
        }, {})

    return {
        ...election,
        constituencies,
    }
}
