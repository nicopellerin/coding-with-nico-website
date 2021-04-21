import faunadb from 'faunadb'

export default async (req: any, res: any) => {
    const q = faunadb.query

    const client = new faunadb.Client({
        secret: process.env.FAUNA_SECRET_KEY!
    })

    const { slug } = req.query

    if (!slug) {
        return res.status(400).json({ message: 'No slug found'})
    }

    const doesDocExist = await client.query(q.Exists(q.Match(q.Index('hits_by_slug'), slug)))

    if (!doesDocExist) {
        await client.query(q.Create(q.Collection('hits'), {
            data: { slug: slug, hits: 0}
        }))
    }

    const doc: any = await client.query(q.Get(q.Match(q.Index('hits_by_slug'), slug)))

    await client.query(q.Update(doc.ref, {
        data: {
            hits: doc.data.hits + 1
        }
    }))

    return res.status(200).json({
        hits: doc.data.hits
    })
}