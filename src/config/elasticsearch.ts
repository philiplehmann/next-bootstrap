import { Client } from '@elastic/elasticsearch'
import config from 'config'
export const elasticsearch = new Client({
  node: config.elasticsearchUrl
})
