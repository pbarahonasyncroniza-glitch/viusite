export default function WhatsAppButton() {
  const phone = '56975114550'
  const message = encodeURIComponent('Hola, me interesa conocer más sobre ViuSite y la simulación 4D para mi proyecto.')
  const url = `https://wa.me/${phone}?text=${message}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform duration-200 hover:scale-110"
      style={{ backgroundColor: '#25D366' }}
      aria-label="Contactar por WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-8 h-8"
        fill="white"
      >
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.738 5.494 2.031 7.806L0 32l8.418-2.007A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.2a13.16 13.16 0 0 1-6.694-1.826l-.48-.285-4.998 1.192 1.215-4.862-.314-.5A13.12 13.12 0 0 1 2.8 16C2.8 8.71 8.71 2.8 16 2.8S29.2 8.71 29.2 16 23.29 29.2 16 29.2zm7.273-9.846c-.398-.199-2.354-1.162-2.719-1.295-.365-.133-.631-.199-.897.199-.266.398-1.030 1.295-1.263 1.561-.232.266-.465.299-.863.1-.398-.199-1.681-.619-3.203-1.977-1.184-1.057-1.983-2.362-2.215-2.760-.232-.398-.025-.613.174-.811.179-.178.398-.465.597-.698.199-.232.266-.398.398-.664.133-.266.066-.499-.033-.698-.1-.199-.897-2.163-1.229-2.961-.324-.777-.653-.671-.897-.683l-.764-.013c-.266 0-.698.1-.1063.499-.365.398-1.395 1.362-1.395 3.320 0 1.957 1.428 3.849 1.627 4.115.199.266 2.811 4.291 6.812 6.020.952.411 1.695.657 2.274.841.955.304 1.824.261 2.511.158.766-.114 2.354-.963 2.686-1.893.332-.930.332-1.727.232-1.893-.099-.166-.365-.266-.763-.465z"/>
      </svg>
    </a>
  )
}
