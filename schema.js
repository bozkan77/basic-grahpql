import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} from "graphql"

let persons =[
  {id:"1", name:"Burak", age:44, email:"burak@burak.com"},
  {id:"2", name:"Murteza", age:44, email:"murti@burak.com"},
  {id:"3", name:"Kenan", age:34, email:"kenan@burak.com"},
  {id:"4", name:"Kamil", age:54, email:"kamil@burak.com"},
  {id:"5", name:"Kemal", age:24, email:"kemal@burak.com"},
]

const PersonType = new GraphQLObjectType({
  name:'Person',
  fields:()=> ({
    id: {type:GraphQLString},
    name: {type:GraphQLString},
    email: {type:GraphQLString},
    age: {type:GraphQLInt}
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    person: {
      type: PersonType,
      args: {id: {type: GraphQLString}},
      resolve(parent, args){
        for(let i = 0; i < persons.length; i++){
          if(persons[i].id === args.id){
            return persons[i]
          }
        }
      }
    },
    persons: {
      type: GraphQLList(PersonType),
      resolve(parent,args) {
        return persons;
      }
    }
  }
})

export default new GraphQLSchema({
  query: RootQuery
}) 