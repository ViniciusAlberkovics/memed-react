import { CommandOptions } from '../domain'
import { MdHubNotInitializedError } from '../errors'

export default async function sendCommand<T = unknown>(command: CommandOptions<T>): Promise<void> {
  if (!('MdHub' in window)) {
    throw MdHubNotInitializedError
  }

  await window.MdHub.command.send(command.module, command.action, command.params)
}
