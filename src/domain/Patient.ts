/* eslint-disable camelcase */
export interface Patient {
  idExterno: string
  cpf: string
  nome: string
  data_nascimento: string
  endereco: string
  cidade: string
  telefone: string
  nome_social?: string
  nome_mae?: string
  dificuldade_locomocao?: boolean
  peso?: number
  altura?: number
}
