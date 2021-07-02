/*
 * Copyright © SerenModz21 2018 - 2021 All Rights Reserved.
 * Unauthorized distribution of any code within this project may result in consequences chosen by the Seren_Modz 21.
 *  Refer to the README for more information.
 */

import { ApplyOptions } from "@sapphire/decorators";
import type { CommandOptions } from "@sapphire/framework";
import { Command } from "@sapphire/framework";
import type { Message } from "discord.js";

@ApplyOptions<CommandOptions>({
  name: "ping",
  description: "Show the bots latency",
})
export default class Ping extends Command {
  run(message: Message) {
    const { ping } = this.context.client.ws;
    return message.reply(`Pong! My ping is: ${ping}`);
  }
}
