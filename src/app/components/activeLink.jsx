'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const style ={
  color:'#0070f3',
  textDecoration: 'underline',
}

export const ActiveLink = ({ href, Text}) => {
   const namepath = usePathname();
  //  console.log(rauter);
  return (
    <>
    <Link  style={namepath === href? style : null} href={href}> 

    {Text}
    
    </Link>

    
    </>
  )
}
