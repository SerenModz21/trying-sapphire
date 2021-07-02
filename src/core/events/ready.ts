/*
 * Copyright © SerenModz21 2018 - 2021 All Rights Reserved.
 * Unauthorized distribution of any code within this project may result in consequences chosen by the Seren_Modz 21.
 *  Refer to the README for more information.
 */

import { ApplyOptions } from "@sapphire/decorators";
import type { EventOptions } from "@sapphire/framework";
import { Event } from "@sapphire/framework";

@ApplyOptions<EventOptions>({
  once: true,
})
export default class Ready extends Event {
  run() {
    this.context.logger.info(
      `${this.context.client.user!.tag} is online and ready to go.`
    );
  }
}
