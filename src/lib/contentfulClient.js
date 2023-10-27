
import { createClient } from "contentful";

export const client = createClient({
  // hid or code in .env.local file which is on same level as package.json
  // space: 'gwp51gar4wfb',
  // accessToken: 'aQI1UARs-iYBWZmIA6AXhFY4v-_MmUZu9nxsb_cEToM',
  // host: 'preview.contentful.com',
  space: import.meta.env.VITE_SPACE_ID,
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

// export default async function getData() {
//     const entries = await client.getEntries();
//     console.log(entries)
// }


export default client;

