import React from "react"
import { graphql } from "gatsby"

const Index = ({ data }) => {
  console.log(data)

  return (
    <>
      <h1>Pokeman</h1>
      <ul>
        {data.allPokemon123.nodes.map(node => {
          return (
            <li key={node.id}>
              <h2>
                Name: {node.name}, Type: {node.type}
              </h2>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export const query = graphql`
  {
    allPokemon123 {
      nodes {
        name
        type
        id
      }
    }
  }
`

export default Index

/*

{
    "allPokemon123": {
        "nodes": [
            {
                "name": "Pikachu",
                "type": "electric",
                "id": "a52cec75-0915-5c88-895a-abf600f1793d"
            },
            {
                "name": "Squirtle",
                "type": "water",
                "id": "6c4c3b35-2320-5a50-9f26-07fd2f92ad85"
            }
        ]
    }
}

------
query MyPokemonQuery {
  allPokemon123(sort: {fields: name, order: DESC}) {
    nodes {
      name
      type
      id
      internal {
        content
        contentDigest
        description
        fieldOwners
        ignoreType
        mediaType
        owner
        type
      }
    }
  }
}

{
  "data": {
    "allPokemon123": {
      "nodes": [
        {
          "name": "Squirtle",
          "type": "water",
          "id": "6c4c3b35-2320-5a50-9f26-07fd2f92ad85",
          "internal": {
            "content": null,
            "contentDigest": "e9b12198693c8a1a6d64a68f7f912315",
            "description": null,
            "fieldOwners": null,
            "ignoreType": null,
            "mediaType": null,
            "owner": "default-site-plugin",
            "type": "Pokemon123"
          }
        },
        {
          "name": "Pikachu",
          "type": "electric",
          "id": "a52cec75-0915-5c88-895a-abf600f1793d",
          "internal": {
            "content": null,
            "contentDigest": "bebe0d56a97e851254515b026974eba5",
            "description": null,
            "fieldOwners": null,
            "ignoreType": null,
            "mediaType": null,
            "owner": "default-site-plugin",
            "type": "Pokemon123"
          }
        }
      ]
    }
  }
}
*/
