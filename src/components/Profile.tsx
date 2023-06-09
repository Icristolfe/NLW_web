import { getUser } from '@/lib/auth'
import Image from 'next/image'

export function Profile() {
  const { name, avatarUrl } = getUser()

  return (
    <div className='flex items-center gap-3 text-lef'>
      <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-400'>
        <Image
          src={avatarUrl}
          width={40}
          height={40}
          alt=''
          className='w-10 h-10 rounded-full'
        />
      </div>
      <p className='text-sm leading-snug max-w-[140px]'>
        {name}
        <a
          href='/api/auth/logout'
          className='block text-red-400 hover:text-red-300'
        >
          Quero Sair
        </a>
      </p>
    </div>
  )
}
