import { useToast } from 'primevue/usetoast'
import { AxiosError } from 'axios'

type Toast = ReturnType<typeof useToast>

type ValidationErrors = {
  [key: string]: string[]
}

export function handleApiError(
  error: unknown,
  toast: Toast,
  setErrors: ((errors: ValidationErrors) => void) | null = null,
) {
  if (error instanceof AxiosError) {
    const errorData = error.response?.data

    if (error.response?.status === 422 && setErrors) {
      setErrors(errorData.message)
    }
    if (error.response?.status === 401) {
      window.location.reload()
    }
    if (error.response?.status !== 422 && error.response?.status !== 401) {
      toast.add({
        severity: 'error',
        summary: 'Failed',
        detail: errorData?.message || 'An unexpected error occurred',
        life: 3000,
      })
    }
  } else {
    console.error('Non-Axios error:', error)
    toast.add({
      severity: 'error',
      summary: 'Failed',
      detail: 'An unexpected error occurred',
      life: 3000,
    })
  }
}
