import { useState } from 'react'
import { UserForm } from './UserForm'
import { UserList } from './UserList'

const usersData = [
  {
    "uid": "u001",
    "name": "Juan Pérez",
    "email": "juan@example.com",
    "profession": "Ingeniero de Software",
    "description": "Apasionado por la tecnología y el desarrollo web.",
    "birthDay": "1990-05-15",
    "hobbies": ["Fotografía", "Viajar", "Cocinar"],
    "links": [
      { "name": "Sitio web personal", "url": "https://www.juanperez.com" },
      { "name": "GitHub", "url": "https://github.com/juanperez" },
      { "name": "LinkedIn", "url": "https://www.linkedin.com/in/juanperez" }
    ]
  },
  {
    "uid": "u002",
    "name": "María López",
    "email": "maria@example.com",
    "profession": "Diseñadora Gráfica",
    "description": "Amante del arte y el diseño creativo.",
    "birthDay": "1985-09-22",
    "hobbies": ["Pintura", "Leer", "Bailar"],
    "links": [
      { "name": "Portafolio", "url": "https://www.marialopezdesign.com" },
      { "name": "Behance", "url": "https://www.behance.net/marialopez" },
      { "name": "Instagram", "url": "https://www.instagram.com/marialopezart" }
    ]
  },
  {
    "uid": "u003",
    "name": "Carlos Gómez",
    "email": "carlos@example.com",
    "profession": "Contador",
    "description": "Apasionado por los números y las finanzas.",
    "birthDay": "1988-11-30",
    "hobbies": ["Jugar fútbol", "Ver películas", "Hacer senderismo"],
    "links": [
      { "name": "Perfil profesional", "url": "https://www.linkedin.com/in/carlos-gomez" },
      { "name": "Twitter", "url": "https://twitter.com/carlosgomez" }
    ]
  },
  {
    "uid": "u004",
    "name": "Ana Martínez",
    "email": "ana@example.com",
    "profession": "Médico",
    "description": "Comprometida con la salud y el bienestar de sus pacientes.",
    "birthDay": "1975-06-10",
    "hobbies": ["Tocar piano", "Hacer yoga", "Leer libros de medicina"],
    "links": [
      { "name": "Consultorio médico", "url": "https://www.anamartinezmd.com" },
      { "name": "Instagram", "url": "https://www.instagram.com/anamartinezmd" }
    ]
  },
  {
    "uid": "u005",
    "name": "Pedro Ramírez",
    "email": "pedro@example.com",
    "profession": "Chef",
    "description": "Apasionado por la gastronomía y la comida deliciosa.",
    "birthDay": "1983-04-25",
    "hobbies": ["Cocinar", "Viajar", "Practicar deportes acuáticos"],
    "links": [
      { "name": "Restaurante", "url": "https://www.pedroramirezchef.com" },
      { "name": "YouTube", "url": "https://www.youtube.com/pedroramirez" }
    ]
  },
  {
    "uid": "u006",
    "name": "Laura García",
    "email": "laura@example.com",
    "profession": "Arquitecta",
    "description": "Apasionada por el diseño y la creación de espacios.",
    "birthDay": "1992-08-18",
    "hobbies": ["Dibujar", "Leer sobre arquitectura", "Bailar salsa"],
    "links": [
      { "name": "Portafolio", "url": "https://www.lauragarciaarq.com" },
      { "name": "Instagram", "url": "https://www.instagram.com/lauragarciaarq" }
    ]
  }
]

export const UserComponent = () => {
  const [users] = useState(usersData)

  return (
    <div className='grid grid-cols-1 gap-4'>
      <UserForm />
      <UserList users={ users } />
    </div>
  )
}
