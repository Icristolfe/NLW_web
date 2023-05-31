'use client'
import { api } from '@/lib/api'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

interface DeleteButtonProps {
  id: string
}

const DeleteButton: React.FC<any> = ({ id }) => {
  const router = useRouter()
  async function handleDeleteMemory() {
    const token = Cookies.get('token')
    const response = await api.delete(`/memories/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    router.refresh()
  }

  return (
    <button
      onClick={handleDeleteMemory}
      className='p-2 items-center justify-center rounded-lg bg-red-500 hover:bg-red-700 text-sm text-gray-100'
    >
      Deletar
    </button>
  )
}

export default DeleteButton
