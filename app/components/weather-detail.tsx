import { FC, PropsWithChildren } from 'react'
import Image from 'next/image'

interface iProps {
  iconUrl: string,
  iconAlt?: string,
  iconTitle?: string,
  text: string,
  description: string,
}

export const WeatherDetail: FC<PropsWithChildren<iProps>> = ({ iconUrl, iconAlt, iconTitle, text, description, children }) => {
  return (
    <div className="flex gap-4">
      <Image
        src={iconUrl}
        width={80}
        height={80}
        title={iconTitle}
        alt={iconAlt || ''}
        priority
      />
      <div className="flex flex-col justify-center">
        <p className="font-bold text-lg">
          {text}
        </p>
        <p className="font-extralight text-sm">{description}</p>
        {children}
      </div>
    </div>
  )
}
