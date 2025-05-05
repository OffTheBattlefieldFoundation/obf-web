export const handleImageUpload = async (
  file: File,
  onProgress?: (event: { progress: number }) => void,
  abortSignal?: AbortSignal,
): Promise<string> => {
  // Simulate upload progress
  for (let progress = 0; progress <= 100; progress += 10) {
    if (abortSignal?.aborted) {
      throw new Error('Upload cancelled')
    }

    await new Promise((resolve) => setTimeout(resolve, 1))
    onProgress?.({ progress })
  }

  return convertFileToBase64(file, abortSignal)
}

/**
 * Converts a File to base64 string
 */
export const convertFileToBase64 = (
  file: File,
  abortSignal?: AbortSignal,
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    const abortHandler = () => {
      reader.abort()
      reject(new Error('Upload cancelled'))
    }

    if (abortSignal) {
      abortSignal.addEventListener('abort', abortHandler)
    }

    reader.onloadend = () => {
      if (abortSignal) {
        abortSignal.removeEventListener('abort', abortHandler)
      }

      if (typeof reader.result === 'string') {
        resolve(reader.result)
      } else {
        reject(new Error('Failed to convert File to base64'))
      }
    }

    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}
