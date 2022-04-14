const DUMMY_NODE_MANIFEST_COUNT = Number(process.env.DUMMY_NODE_MANIFEST_COUNT) || 0
const ONE_DAY = 1000 * 60 * 60 * 24
const THIRTY_DAYS = ONE_DAY * 30
const YESTERDAY = new Date() - ONE_DAY
const LOWER_CREATED_AT_TIME_LIMIT = YESTERDAY - THIRTY_DAYS
const UPPER_CREATED_AT_TIME_LIMIT = YESTERDAY

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function createDummyNodeManifests({ actions }) {
  console.log(`creating node manifests......`, DUMMY_NODE_MANIFEST_COUNT)
  // Add some dummy node manifests for testing node manifest limitations
  for (let i = 0; i < DUMMY_NODE_MANIFEST_COUNT; i++) {
    const id = `dummy-${i}`
    const node = {
      id,
      internal: {
        type: `TestNode`,
        contentDigest: id,
      },
    }

    const updatedAtUTC = new Date(
      randomIntFromInterval(
        LOWER_CREATED_AT_TIME_LIMIT,
        UPPER_CREATED_AT_TIME_LIMIT,
      )
    ).toUTCString()

    actions.createNode(node)

    actions.unstable_createNodeManifest({
      manifestId: `manifest-${id}`,
      node,
      updatedAtUTC,
    })
  }
}

exports.sourceNodes = ({ actions }) => {
  createDummyNodeManifests({ actions })
}
