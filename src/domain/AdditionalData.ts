export interface AdditionalData {
  /** Metadata */
  [metadataName: string]: unknown
  /** Each item in the array turns into a line. */
  header: Record<string, string>[]
  /** To skip a line in the footer, send the string with a "\n" */
  footer: string
}
