/*
 * Copyright © SerenModz21 2018 - 2021 All Rights Reserved.
 * Unauthorized distribution of any code within this project may result in consequences chosen by the Seren_Modz 21.
 *  Refer to the README for more information.
 */

import "dotenv/config";
import "module-alias/register";
import { Client } from "@lib";

const client = new Client();

(async () => {
  await client.login(process.env.TOKEN);
})().catch((error: Error) => {
  client.logger.error(error);
});
