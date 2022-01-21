import { AdditionalData } from './AdditionalData'
import { Dictionary } from './Dictionary'
import { Patient } from './Patient'
import { Workplace } from './Workplace'

export type Modules = 'plataforma.prescricao' | 'plataforma.sdk' | 'hub'
export type CommandTypes =
  | 'find'
  | 'viewPrescription'
  | 'setAllergy'
  | 'setWorkplace'
  | 'setAdditionalData'
  | 'core:setDictionary'

export type ParamTypes = Patient | Dictionary | Workplace | AdditionalData | unknown

export interface CommandOptions<T = ParamTypes> {
  module: Modules
  action: CommandTypes
  params: T
}
