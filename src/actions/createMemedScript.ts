export default function createMemedScript(
  doctorToken: string,
  color: string,
  scriptSrc: string,
  scriptId: string,
  setPrescriptionLoaded: React.Dispatch<React.SetStateAction<boolean>>,
  embeddedContainerId?: string
): HTMLScriptElement {
  const memedScriptFound = document.getElementById(scriptId)
  if (memedScriptFound) {
    setPrescriptionLoaded(true)
    return memedScriptFound as HTMLScriptElement
  }
  const script = document.createElement('script')
  script.id = scriptId
  script.setAttribute('type', 'text/javascript')
  script.setAttribute('data-color', color)
  script.setAttribute('data-token', doctorToken)

  if (embeddedContainerId) {
    script.setAttribute('data-container', embeddedContainerId)
  }

  script.src = scriptSrc
  document.body.appendChild(script)
  return script
}
