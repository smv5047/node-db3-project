const db = require("../data/db-configs")

function find() {
    return db("schemes")
}

function findById(id) {
    return db("schemes")
        .where({id})
        .first()
}

async function findSteps(id) {
    const [data] = await db("schemes").where({id})
    console.log(data)
        return db("steps").where({scheme_id: data.id})
}

async function add(scheme) {
    const [id] = await db("schemes").insert(scheme)
    return db("schemes")
        .where({id})
        .first()
}

function update(change, id) {
    return db("schemes")
        .where({id})
        .update({
            scheme_name: change.scheme_name
        })
   
        //resolves to newly updated scheme object
        // const [data] = await db("schemes").where({id}).update({scheme_name: change.scheme_name})
        // return db("schemes").where({data})
}

function remove(id) {
   return db("schemes").where({id}).delete()
}

//resolves to null
//resolves to the removed scheme

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}