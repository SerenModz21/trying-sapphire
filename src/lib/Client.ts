/*
 * Copyright © SerenModz21 2018 - 2021 All Rights Reserved.
 * Unauthorized distribution of any code within this project may result in consequences chosen by the Seren_Modz 21.
 * Refer to the README for more information.
 */

import { LogLevel, SapphireClient } from "@sapphire/framework";

declare module "@sapphire/framework" {
  interface SapphireClient {
    owners: string[];
  }
}

export class Client extends SapphireClient {
  readonly owners = process.env.OWNERS.split(",");

  constructor() {
    super({
      defaultPrefix: "s.",
      caseInsensitiveCommands: true,
      logger: { level: LogLevel.Trace },
    });
  }
}
