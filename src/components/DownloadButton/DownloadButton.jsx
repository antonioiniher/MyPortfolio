const DownloadButton = () => {
  const handleDownload = () => {
    const driveFileUrl =
      'https://drive.google.com/uc?export=download&id=1R9jni5wCyF46wESvfIvu4Hq_J_sfwSoY'
    const link = document.createElement('a')
    link.href = driveFileUrl
    link.download = 'CV_Antonio_Iniguez.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return <button onClick={handleDownload}>Descargar CV</button>
}

export default DownloadButton
