exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  // allPokemon123   -- two nodes totally
  const pokemons = [
    { name: "Pikachu", type: "electric" },
    { name: "Squirtle", type: "water" },
  ]

  pokemons.forEach(pokemon => {
    const node = {
      name: pokemon.name,
      type: pokemon.type,

      id: createNodeId(`Pokemon-${pokemon.name}`),
      internal: {
        type: "Pokemon123",
        contentDigest: createContentDigest(pokemon),
      },
    }

    // A Node is the smallest unit of data in Gatsby.
    actions.createNode(node)
  })

  // allTestNode   -- one node only
  // const nodeData = {
  //   title: "Test Node",
  //   description: "Testing the node ",
  // }

  // const newNode = {
  //   ...nodeData,

  //   id: createNodeId("TestNode-testid"),
  //   internal: {
  //     type: "TestNode",
  //     contentDigest: createContentDigest(nodeData),
  //   },
  // }

  // actions.createNode(newNode)
}
